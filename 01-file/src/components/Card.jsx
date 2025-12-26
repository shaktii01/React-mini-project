

const Card = (p) => {
  return (
    <div>
       <div className="card">
                <div className='head'>
                    <span><img src={p.complogo}alt="" /></span>
                    <button><p>save</p></button>
                </div>
                <div className="center">
                    <span>
                        <p>{p.comp}</p>
                        <small>{p.postedTime} </small>
                    </span>
                    <div>
                        <h4>{p.post}</h4>
                        <div>
                            <button>Part Time</button>
                            <button>Senior Level</button>
                        </div>
                    </div>


                </div>
                <div className="foot">
                    <div>
                        <h4>
                            {p.salary}
                        </h4>
                        <p>{p.location}</p>
                    </div>
                    <button>apply now</button>
                </div>
            </div>
    </div>
  )
}

export default Card
