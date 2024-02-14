import {
  redirect,
  useActionData,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import Wrapper from "../assets/stylingWrappers/Transfer.ts";
import PageHeader from "../components/PageHeader.tsx";
import TransferForm from "../components/TransferForm.tsx";
import Modal from "../components/Modal.tsx";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const MIN_BALANCE = 500;

function Transfer() {
  const navigate = useNavigate();

  const transactions = useLoaderData();
  const actionData = useActionData();

  const balance = getBalance(transactions);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isSnackbarOpened, setIsSnackbarOpened] = useState(false);

  useEffect(() => {
    if (!actionData) return;
    if (actionData.result === "insufficient") setIsModalOpened(true);
    else if (actionData.result === "successful") setIsSnackbarOpened(true);
  }, [actionData]);

  function handleModalClose() {
    setIsModalOpened(false);
  }

  function handleSnackbarClose() {
    setIsModalOpened(false);
    navigate("/dashboard");
  }

  return (
    <Wrapper>
      <Modal isModalOpened={isModalOpened} handleClose={handleModalClose}>
        <h2>insufficient balance</h2>
        <FontAwesomeIcon icon={faTriangleExclamation} />
        <p>You must have at least ${MIN_BALANCE} to withdraw.</p>
        <button onClick={handleModalClose}>close</button>
      </Modal>
      <PageHeader name="Muaz Abdin" balance={balance} />
      <h3 className="title">Transfer</h3>
      <TransferForm />
      <Snackbar
        open={isSnackbarOpened}
        autoHideDuration={1500}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Transfer executed successfully
        </Alert>
      </Snackbar>
    </Wrapper>
  );
}

export default Transfer;

function getBalance(transactions) {
  if (!transactions) return 0;
  return transactions.reduce((sum, trans) => sum + trans.amount, 0);
}

function getFormData(formData) {
  const fdData = Object.fromEntries(formData.entries());
  fdData.amount = parseInt(fdData.amount);
  if (fdData.withdraw === "") fdData.amount *= -1;
  const { withdraw, deposit, ...data } = fdData;
  return data;
}

export async function action({ request, params }) {
  const fd = await request.formData();
  const data = getFormData(fd);
  const response = await fetch("http://localhost:3000/v1/transactions", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  if (response.status === 403) return { result: "insufficient" };
  if (!response.ok) throw response;
  return { result: "successful" };
  // return redirect("/dashboard");
}
