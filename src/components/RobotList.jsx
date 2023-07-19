import Card from "./Card"

const RobotList = ({ roboFilter }) => {
  return (
    <section>
        {roboFilter.map((robot) => {
            return (<Card key={robot.id} {...robot}/>)
        })}
    </section>
  )
}

export default RobotList