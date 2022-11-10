import Title from "./Title";
import Image from "./Image";
import Paragraph from "./Paragraph"
import ImgHtml from "../assets/html.jpg"
import ImgCss from "../assets/css.jpg"
import ImgJs from "../assets/js.jpg"
import ImgGit from "../assets/gitgit.jpg"
import ImgReact from "../assets/react.jpg"


function Cards(){

return(
    <div className="Cards">
        <section className="card">
        <Title texto="HTML"/>
        <Paragraph paragraph="HTML é uma abreviação de Hyper Text Markup Language (linguagem de marcação em hipertexto). Ou seja, não se trata de uma linguagem de programação, pois não tem lógica (algoritmos, processos etc). Ele cria a estrutura de uma página ou aplicação web, determinando a separação de layout e conteúdo."/>
        <Image caminhoImg ={ImgHtml}/>
        </section>
        
        <section className="card">
        <Title texto="CSS"/>
        <Paragraph paragraph="CSS é abreviação de Cascading Style Sheet (folha de estilos em cascata). É a linguagem que define estilos para o HTML, portanto, não se trata de linguagem de programação. CSS tem 'cascata' no nome, devido a sua forma de determinar a propriedade de um elemento - levando em consideração hierarquia de seletores e de chamadas de estilo (inline, internal e external). Para fazer o link de um arquivo .css em um documento .html, devemos inserir a tag no do documento, com o href do caminho do arquivo."/>
        <Image caminhoImg ={ImgCss}/>
        </section>

       <section className="card">

        <Title texto="JAVASCRIPT"/>
        <Paragraph paragraph="Segundo o livro Estrutura de dados e algoritmos com javascript', de Loiane Groner: Javascript é uma das linguagens de programação mais populares atualmente, é conhecida como a linguagem da internet porque os navegadores a entendem de modo nativo, sem a instalação de qualquer plugin. Praticamente todos os sites e aplicações web usam javascript, até outras ferramentas que são usadas para web, no fim das contas vão precisar transformar o código em javascript para que o navegador entenda."/>
        <Image caminhoImg ={ImgJs}/>
       </section>
        
        <section className="card">

        <Title texto="GIT "/>
        <Paragraph paragraph="O Git é um sistema para controlar versão de códigos e é usado pela grande maioria das pessoas desenvolvedoras atualmente. Isso significa dizer que usando o git a gente pode esquecer o medo de perder alguma alteração que a gente fez no nosso código. Ou se a gente precisar trabalhar em equipe fica super fácil de identificar quem mexeu em cada linha de código ou como resolver conflitos se as pessoas mexerem nas mesmas linhas."/>
        <Image caminhoImg ={ImgGit}/>
        </section>

        <section className="card">

        
        

        <Title texto="REACT"/>
        <Paragraph paragraph="O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."/>
        <Image caminhoImg ={ImgReact}/>
       </section>

    </div>
)

}

export default Cards