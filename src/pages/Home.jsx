
import pasabay from '../assets/Pasabay/pasabay.svg'
import persona from '../assets/Persona/persona.svg'
import me from '../assets/Profile-Jade.jpg'
import {AntModal} from '../components/Ant'

const PDF_FILE_URL = 'http://localhost:5173/myPage/Paver-resume.pdf'


export function Home () {
    const aboutMe=`As a junior web developer, I've amassed over two years of internship experience with diverse companies, where I honed my skills in web development. Now, I'm actively seeking an opportunity to transition into the corporate world, where I can continue to nurture and advance my expertise.`;

    const downLoadResume =(url)=>{
      const fileName = url.split('/').pop();
      const aTag = document.createElement('a');
      aTag.href=url
      aTag.setAttribute('download',fileName)
      document.body.appendChild(aTag)
      aTag.click();
      aTag.remove();

    }

  return (
    <>
      <div className="profile">
        <div className="profile-content">
          <div className="profile-picture" > <img src={me} alt="profile-jade" /></div>
          <div className="first-content">
            <div className="row">
              <div className="profile-title">
                <div className="profile-name">Jade N. Paver</div>
                <div className="profile-role">FullStack Web Developer | Project Manager</div>
              </div>
              <div className="profile-interact">
                <button className="btn btn-download" onClick={()=>{downLoadResume(PDF_FILE_URL)}}>Download CV</button>
                <button className="btn btn-contact">Contact Me</button>
              </div>
            </div>
          </div>
        </div>
        <div className="column text-margin text-line-height">
          <p>{aboutMe}</p>
        </div>
      </div>
     <AntModal/>

      <section className="content-section container">
        <h2 className="section-header">Featured Projects</h2>

        <section className="row section-project">

            <div className="column flex">
                <div className="center-items project-title">
                    PERSONA-HRIS
                </div>
                <div className="row ">
                    <img className="pasabay-images" src={persona} width="100%" height="100%" alt='persona' />
                </div>

            </div>
            <div className="column flex project1-padding">
                <div className="text-inside-background-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="row tech-stack">
                    <div className="tool_container">Python</div>
                    <div className="tool_container">Python</div>
                    <div className="tool_container">Python</div>
                    <div className="tool_container">Python</div>
                </div>
            </div>

        </section>
        <section className="row section-project">

            <div className="column flex project2-padding">
                <div className="text-inside-background-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="row tech-stack">
                    <div className="tool_container">Python</div>
                    <div className="tool_container">Python</div>
                    <div className="tool_container">Python</div>
                    <div className="tool_container">Python</div>
                </div>
            </div>
            <div className="column flex">
                <div className="center-items project-title">
                    PASABAY
                </div>
                <div className="row ">
                    <img className="pasabay-images" src={pasabay} width="100%" height="100%" alt='pasabay'/>
                </div>

            </div>
        </section>
    </section>
    <section className="section-skills column">
        <h className="title-skills"> SKILLS</h>
        <div className="skills-row">
            <button className="btn-skills">ReactJS</button>
            <button className="btn-skills">Node.js</button>
            <button className="btn-skills">Angular</button>
        </div>
        <div className="skills-row">
            <button className="btn-skills">Flutter</button>
            <button className="btn-skills">MongoDB</button>
            <button className="btn-skills">Prisma</button>
        </div>  
        <div className="skills-row">
            <button className="btn-skills">Javascript</button>
            <button className="btn-skills">C#</button>
            <button className="btn-skills">Dart</button>
        </div>

    </section>
      </>
  )
}

