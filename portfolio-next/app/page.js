import Image from "next/image";

export default function Home() {
  return (
    <>
     <header>
      <nav>
        <div class="left">Deepak's Portfolio</div>
        <div class="right"></div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a hrf="/">Projects</a></li>
            <li><a href="/">Contact Me</a></li>

        </ul>
      </nav>
     </header>
    <main>
        <section className="firstSection">
            <div className="leftSection">
                <div> My Name is <span className="purple">Deepak</span>
                </div>
                <div> and I am a passionate</div>
                <span id="element"></span>
                <div className="button">
                  <button className="btn">Download Resume</button>
                  <button className="btn">Visit Github</button>
                </div>
            </div>
            <div className="rightSection">
                <img src="developer.png" alt=""/>
            </div>
        </section>
        <hr/>  
        <section className="secondSection">
          <span className="text-gray"> What I have done so far</span>
          <h1>Work Experience</h1>

        <div className="box">
          <div className="vertical">
            <img src="image.png" alt="" className="image-top"/>
            <div className="vertical-title">
              HTML Developer - Pintrest (2010-2012)
            </div>
            <div className="vertical-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero alias eos aliquam veritatis at accusantium excepturi officiis rem hic eveniet illo suscipit cum, sapiente fugiat impedit neque repellat, minus optio, eaque ad ipsam ullam?
            </div>
          </div>
          <div className="vertical">
            <img src="whatsapp.png" alt="" className="image-top"/>
            <div className="vertical-title">
              Node. js Developer - Whatsapp (2012-2014)
            </div>
            <div className="vertical-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero alias eos aliquam veritatis at 
          accusantium excepturi officiis rem hic eveniet illo suscipit cum, sapiente fugiat impedit neque 
          repellat, minus optio, eaque ad ipsam ullam?
            </div>
          </div>
          <div className="vertical">
            <img src="instragram.png" alt="" className="image-top"/>
            <div className="vertical-title">
              HTML Developer - Instragram (2014-2018)
            </div>
            <div className="vertical-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero alias eos aliquam veritatis at 
          accusantium excepturi officiis rem hic eveniet illo suscipit cum, sapiente fugiat impedit neque 
          repellat, minus optio, eaque ad ipsam ullam?
            </div>
          </div> 
          <div className="vertical">
            <img src="twitter.png" alt="" className="image-top"/>
            <div className="vertical-title">
              HTML Developer - Twitter (2018-2020)
            </div>
            <div className="vertical-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero alias eos aliquam veritatis at 
          accusantium excepturi officiis rem hic eveniet illo suscipit cum, sapiente fugiat impedit neque 
          repellat, minus optio, eaque ad ipsam ullam?
            </div>
          </div>
          <div className="vertical">
            <img src="facebook.png" alt="" className="image-top"/>
            <div className="vertical-title">
              Software Developer - FaceBook (2020-2023)
            </div>
            <div className="vertical-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero alias eos aliquam veritatis at 
          accusantium excepturi officiis rem hic eveniet illo suscipit cum, sapiente fugiat impedit neque 
          repellat, minus optio, eaque ad ipsam ullam?
          </div> 
        </div>  
        </div>
        </section>     
    </main>
    <footer>
      <div className="flex">
        <div className="footer-first">
          <h3>Deepak's Developer Portfolio</h3>
        </div>
        <div className="footer-second">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
        </div>
        <div className="footer-third">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-fourth">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-rights">
          Copyright &#169; www.deepaksportfolio.com | All rights reserved
        </div>
      </div>
    </footer>
    </>
  )
}
