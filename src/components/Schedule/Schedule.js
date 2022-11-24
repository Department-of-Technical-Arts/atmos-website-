import React from "react"
import { firestore } from "../../config"
import "./Schedule.css"

class Schedule extends React.Component {
    constructor () {
        super ()
        this.state = {
            day1: [],
            day2: [],
            day3: [],
            currentDate: "25"
        }
    }
    componentDidMount () {
        firestore.collection("schedule").where("date", "==", "25").get().then(Snapshot => {
            let temp = []
            Snapshot.forEach((document) => {
                temp.push(document.data())
            })
            this.setState ({day1: temp})
        }).catch(err => console.log(err.message))
        firestore.collection("schedule").where("date", "==", "26").get().then(Snapshot => {
            let temp = []
            Snapshot.forEach((document) => {
                temp.push(document.data())
            })
            this.setState ({day2: temp})
        }).catch(err => console.log(err.message))
        firestore.collection("schedule").where("date", "==", "27").get().then(Snapshot => {
            let temp = []
            Snapshot.forEach((document) => {
                temp.push(document.data())
            })
            this.setState ({day3: temp})
        }).catch(err => console.log(err.message))
    }
    render () {
        const changeDate = (number) => {
            this.setState ({currentDate: number})
        }
        return (
            <div style={{display:"flex", margin:"20px", flexDirection:"column"}}>
                <h4 style={{border: "1px solid white", padding: "10px", color: "white", alignSelf:"center", marginTop: "50px"}}>SCHEDULE</h4>
                <div style={{display:"flex", justifyContent:"center", marginBottom:"15px"}}>
                    <div onClick={() =>changeDate("25")} className={`day-box ${this.state.currentDate === "25" ? `highlighted-box` : null}`}>
                        DAY 1 (25<sup>th</sup> NOV)
                    </div>
                    <div onClick={() =>changeDate("26")} className={`day-box ${this.state.currentDate === "26" ? `highlighted-box` : null}`}>
                        DAY 2 (26<sup>th</sup> NOV)
                    </div>
                    <div onClick={() =>changeDate("27")} className={`day-box ${this.state.currentDate === "27" ? `highlighted-box` : null}`}>
                        DAY 3 (27<sup>th</sup> NOV)
                    </div>
                </div>
                <div>
                {["9","10","11","12","13","14","15","16","17","18","19","20","21","22"].map((eachElement,index) => {
                    return (
                        <div>
                            <div className="time-box">
                                {eachElement !== "12" ? eachElement%12 : "12"}:00 {index <= 2 ? "AM" : "PM"}
                            </div>
                            <div style={{display:"flex", flexWrap:"wrap"}}>
                                {this.state.currentDate === "25" ? <div 
                                style={{display:"flex", flexWrap:"wrap"}}>
                                    {this.state.day1.map((eachEvent) => {
                                    if (eachEvent.time === eachElement)
                                        return (
                                            <div className="event-box">
                                                <div className="event-heading">
                                                   {eachEvent.name}
                                                </div>
                                                <div>
                                                   <b>ROOM NUMBER: </b> {eachEvent.roomNumber}
                                                </div>
                                                <div>
                                                    <b>EVENT TYPE: </b> {eachEvent.type}
                                                </div>
                                            </div>
                                        )
                                })}
                                </div> : <div>
                                    {this.state.currentDate === "26" ? <div style={{display:"flex", flexWrap:"wrap"}}>
                                        {this.state.day2.map((eachEvent) => {
                                    if (eachEvent.time === eachElement)
                                        return (
                                            <div className="event-box">
                                                <div className="event-heading">
                                                   {eachEvent.name}
                                                </div>
                                                <div>
                                                   <b>ROOM NUMBER: </b> {eachEvent.roomNumber}
                                                </div>
                                                <div>
                                                    <b>EVENT TYPE: </b> {eachEvent.type}
                                                </div>
                                            </div>
                                        )
                                })}
                                    </div> : <div style={{display:"flex", flexWrap:"wrap"}}>
                                        {this.state.day3.map((eachEvent) => {
                                    if (eachEvent.time === eachElement)
                                        return (
                                            <div className="event-box">
                                                <div className="event-heading">
                                                   {eachEvent.name}
                                                </div>
                                                <div>
                                                   <b>ROOM NUMBER: </b> {eachEvent.roomNumber}
                                                </div>
                                                <div>
                                                    <b>EVENT TYPE: </b> {eachEvent.type}
                                                </div>
                                            </div>
                                        )
                                })}
                                        </div>}
                                </div> }
                                
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default Schedule