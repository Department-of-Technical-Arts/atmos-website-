import { React, useEffect }from 'react' ;
import "./Proshows.css";
import proshowsImages from '../../images/events-photos/proshows-images';

const Proshows = () => {
    const proShowsNames = ["Armaan Malik","Nishant Suri","Danny Avila","Aerreo","Sanam","Vivek Singh","Pineapple Express"]
    useEffect(() => {
        document.title = "PROSHOWS - ATMOS" 
    }, []);

    return(
        <div>
            <div className='background-container-proshows'>
                <div className='background-proshows'>
                    <div className="image-proshows"></div>
                    <div className='content-proshows'>
                        <h1>PROSHOWS</h1>
                    </div>
                    <div className='card-container-proshows'>
                        {
                            Object.values(proShowsNames).map((value,i)=>{
                                return(
                                    <a href="/gallery"><div className='hover-cards-proshows' style={{ 
                                        backgroundImage: `url(${proshowsImages[i]})`
                                      }}><p>{value}</p></div></a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proshows;

