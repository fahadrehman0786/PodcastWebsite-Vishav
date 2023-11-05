import Navbar from "../Navbar/Navbar"
import collage from "././../../assets/collage.png"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


const Signup = ()=>{
    return(
<>
<Navbar></Navbar>
<div style={{display:'flex',backgroundColor:'black', height:'40px', justifyContent:'center', alignItems:'center'}}>

    <p style={{color:'white'}}> Dummy Text</p>
    </div>

    <div style={{display:'flex'}}> 

    <div style={{marginLeft:'50px'}}>
        <p style={{color:'black', marginTop:'30px', fontSize:'60px', fontWeight:'100px', marginBottom:'30px'}}>Documenting the journey of a Limitless Creator...</p>

        <div style={{display:'flex'}}>
        <TextField sx={{width:'500px'}} label="Write your email here" variant="filled" />
        <Button sx={{ backgroundColor: 'yellow',  height:'58px' }}>
  <p style={{ color: 'black', fontWeight: 'bold' }}>Join Free</p>
</Button>
        </div>


        <div>
            <p style={{ color: 'black', fontWeight: 'bold', fontSize:'30px' }}>
            A place to help entrepreneurs expand their mind & get closer to the limitless state. A space for the next-generation of innovators.
            </p>

            <p style={{ color: 'black', fontWeight: 'bold', fontSize:'30px', marginTop:'50px' }}>
            Here I will be documenting the principles, lessons & patterns I find through this life.            </p>

            <p style={{ color: 'black', fontWeight: 'bold', fontSize:'30px',marginTop:'50px' }}>
            A personal safe of all of my personal golden nuggets... For you too.            </p>

            <p style={{ color: 'black', fontWeight: 'bold', fontSize:'30px',marginTop:'50px' }}>
            Writing every week            </p>
        </div>



    </div>

    <div style={{ marginLeft:'200px'}}>

        <img style={{height:'800px'}} src={collage}>

        </img>


    </div>
    </div>



</>
    )

}
export default Signup;