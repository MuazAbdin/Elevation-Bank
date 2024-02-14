function PageHeader({ name = "Muaz Abdin", balance = 2500 }: IPageHeaderProps) {
  const balanceStyle: string = balance < 500 ? "red" : "green";
  return (
    <header>
      <div>
        Hello, <strong>{name}</strong>
      </div>
      <div>
        Balance: <strong style={{ color: balanceStyle }}>${balance}</strong>
      </div>
    </header>
  );
}

interface IPageHeaderProps {
  name: string;
  balance: number;
}

export default PageHeader;
