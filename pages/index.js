import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div >
      <Head>
        <title>dart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={[styles.main]}>
        <div className={[styles.smi]+" d-flex"} >
          <div><a className={[styles.smilink]+[' me-3']} href="#">Home</a></div>
          <div><a  className={[styles.smilink]} href="#">About us</a></div>
        </div>
        <div className={[styles.electronic]+ [ ' d-md-flex']+[ ' d-block']+[ ' justify-content-between']}>
          <div  className={[styles.electronicleft]}>
              <div className={[styles.electronicdart]}>Electronic darts</div>
              <div className={[styles.electronicnumber]}>No. 489</div>
              <div className={[styles.electronictext]}>The game of darts is useful not only as entertainment, but also as a training
                  for the brain and coordination of movements.
              </div>
              <div className={[styles.electronicbtn]}><button>Get it now</button></div>
          </div>
          <div className={[styles.electronicright]}><img src="/img/dartimg.svg" alt=""/></div>
        </div>
          <div className={[styles.secondmain]}>
<div className={[styles.secondmainheadermain]+[ ' d-md-flex']+[ ' d-block']+[ ' justify-content-between']}>
    <div className={[styles.secondmainheader]}><img src="/img/carre.svg" alt=""/> Develops logical
        thinking and reaction</div>
    <div className={[styles.secondmainheader]}><img src="/img/carre.svg" alt=""/>Improves fine hand
        and eye motor skills</div>
    <div className={[styles.secondmainheader]}><img src="/img/carre.svg" alt=""/>Helps to increase
        concentration and
        reduce stress</div>
</div>
              <div className={[styles.benefict]+[ ' d-md-flex']+[ ' d-block']+[ ' justify-content-between']}>
                  <div  className={[styles.benefictfirst]+ [' d-flex']}><div><img src="/img/flech.svg" alt=""/></div><div><img  className={[styles.benefictfirstimgsecond]} src="/img/flechsecond.svg" alt=""/></div></div>
                  <div className={[styles.benefictsecond]}>
                      <div className={[styles.benefictsecondheader]}>Benefits of Playing Darts</div>
                      <div className={[styles.benefictsecondtext]}>During the game, you need to make quick decisions, evaluate the distance and strength of the throw,
                          which develops logical thinking and reaction. In addition, playing darts helps to improve fine motor skills of the hands and the eye,
                          and also helps to increase concentration and reduce stress.
                      </div>
                  </div>
              </div>

<div>
    <div>'t miss your chance</div>
    <div>Until the end of the promotion</div>
    <div>
        <div className="input-group-prepend">
            <span className="input-group-text" id="">First and last name</span>
        </div>
        <div className="input-group"></div>
        <input type="text" placeholder={'Your name'} className="form-control"/>
        <input type="text" placeholder={'Your name'} className="form-control"/>

    </div>
</div>

          </div>



      </main>

      {/*<footer className={styles.footer}>*/}
      {/*  <a*/}
      {/*    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Powered by{' '}*/}
      {/*    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />*/}
      {/*  </a>*/}
      {/*</footer>*/}
    </div>
  )
}
