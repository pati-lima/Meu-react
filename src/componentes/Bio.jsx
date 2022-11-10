import Title from "./Title"
import Subtitles from"./Subtitles"
import Image from "./Image"
import imagemPati from "../assets/github.jpg"


function Bio(){

  return(

      <div className="bio">
        <Title texto ="Prazer, Patrícia Lima!"/>
        <Subtitles segundoParagraph ="Quem é Patrícia?"/>
        <Image caminhoImg ={imagemPati}/>
      </div>
        )
      }
      
      export default Bio
        
        