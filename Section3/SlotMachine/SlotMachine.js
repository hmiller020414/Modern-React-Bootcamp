class SlotMachine extends React.Component {
    render() {
        let {s1, s2, s3} = this.props
        let theSame = (s1 === s2) && (s1 === s3)
        return (
            <div>
                <p>{s1} {s2} {s3}</p>
                <p>{theSame ? 'You win!' : 'You lose. :(' }</p>
            </div>
        )
    }
}
