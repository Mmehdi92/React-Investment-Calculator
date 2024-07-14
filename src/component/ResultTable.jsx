import { calculateInvestmentResults, formatter } from "../util/investment"

export default function ResultTable({ input }) {
    const resultData = calculateInvestmentResults(input)
    const initialInvestment = resultData[0].valueEndOfYear -resultData[0].interest - resultData[0].annualInvestment
    console.log(resultData)
    return (
        <table id="result">
            <tr>
                <th>
                    Year
                </th>
                <th>Investment Value</th>
                <th>Interest (year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            <tbody>
                {resultData.map((yearData) => {
                    const totalInterest  = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment
                    const totalAmountInvest = yearData.valueEndOfYear - totalInterest
                    return <tr key={yearData.year}>
                       <td>{yearData.year}</td>
                       <td>{formatter.format(yearData.valueEndOfYear)}</td>
                       <td>{formatter.format(yearData.interest)}</td>
                       <td>{formatter.format(totalInterest)}</td>
                       <td>{formatter.format(totalAmountInvest)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}