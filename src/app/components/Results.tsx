interface ResultsProps {
  tax: number;
  relief: number;
  income: number;
}

const formatNumberWithCommas = (number: number) => {
  return number.toLocaleString('en-US');
};

const convertToNum = (value: string) => {
  const number = parseFloat(value.replace(/,/g, ''));
  return number;
}

const Results: React.FC<ResultsProps> = ({ tax, relief, income }) => {
  
  const cashAfterTax = income - tax;
  console.log('cash after tax is ' + cashAfterTax);

  return (
    tax !== null && (
      <div className="mt-6 bg-green-50 p-4 rounded-md">
        <h2 className="text-2xl font-bold">Results</h2>
        <p className="text-lg">Tax Due: Rs. {formatNumberWithCommas(tax)}</p>
        <p className="text-lg">Total Relief: Rs. {formatNumberWithCommas(relief ?? 0)}</p>
        <p className="text-lg font-semibold mt-4">
          Cash Left After Tax: Rs. {formatNumberWithCommas(cashAfterTax)}
        </p>
      </div>
    )
  );
};

export default Results;
