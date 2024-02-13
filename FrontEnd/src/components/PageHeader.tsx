function PageHeader({ name = "Muaz Abdin", balance = 2500 }: IPageHeaderProps) {
  return (
    <header>
      <div>
        Hello, <strong>{name}</strong>
      </div>
      <div>
        Balance: <strong>${balance}</strong>
      </div>
    </header>
  );
}

interface IPageHeaderProps {
  name: string;
  balance: number;
}

export default PageHeader;
