export default function UserInPut({ initialInvestment, annualInvestment, expectedReturn, duration, onChangeInvestment }) {
    return (

        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" name="initialInvestment" id="" required value={initialInvestment} onChange={(event) => onChangeInvestment("initialInvestment",event.target.value)} />
                </p>
                <p>
                    <label>Anual Investment</label>
                    <input type="number" name="annualInvestment" id="" required value={annualInvestment} onChange={(event) => onChangeInvestment("annualInvestment",event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" name="expectedReturn" id="" required value={expectedReturn} onChange={(event)=> onChangeInvestment("expectedReturn", event.target.value)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" name="duration" id="" required value={duration} onChange={(event)=>onChangeInvestment("duration",event.target.value)} />
                </p>
            </div>
        </section>

    )
}