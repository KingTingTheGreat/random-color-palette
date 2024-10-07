import { useState } from "react";

function randHex(): string {
  const chars = "0123456789abcdef";
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += chars[Math.floor(Math.random() * chars.length)];
  }
  return hex;
}

function App() {
  const [headerBg, setHeaderBg] = useState("blue");
  const [headerColor, setHeaderColor] = useState("green");

  const [linkColor1, setLinkColor1] = useState("lime");
  const [linkColor2, setLinkColor2] = useState("navy");
  const [linkColor3, setLinkColor3] = useState("yello");

  const [mainBg, setMainBg] = useState("red");
  const [mainColor, setMainColor] = useState("salmon");

  const [p1Color, setP1Color] = useState("lightgreen");
  const [p2Color, setP2Color] = useState("lightgreen");
  const [p3Color, setP3Color] = useState("lightgreen");

  const [sub1Color, setSub1Color] = useState("lightgreen");
  const [sub2Color, setSub2Color] = useState("lightgreen");
  const [sub3Color, setSub3Color] = useState("lightgreen");

  const [b1Bg, setB1Bg] = useState("darkorchid");
  const [b1Color, setB1Color] = useState("deepskyblue");
  const [b2Bg, setB2Bg] = useState("deeppink");
  const [b2Color, setB2Color] = useState("lavender");

  const whiteout = () => {
    setHeaderBg("white");
    setHeaderColor("white");
    setLinkColor1("white");
    setLinkColor2("white");
    setLinkColor3("white");
    setMainBg("white");
    setMainColor("white");
    setP1Color("white");
    setP2Color("white");
    setP3Color("white");
    setSub1Color("white");
    setSub2Color("white");
    setSub3Color("white");
    setB1Bg("white");
    setB1Color("white");
    setB2Bg("white");
    setB2Color("white");
  };

  const randomizeColors = () => {
    setHeaderBg(randHex());
    setHeaderColor(randHex());
    setLinkColor1(randHex());
    setLinkColor2(randHex());
    setLinkColor3(randHex());
    setMainBg(randHex());
    setMainColor(randHex());
    setP1Color(randHex());
    setP2Color(randHex());
    setP3Color(randHex());
    setSub1Color(randHex());
    setSub2Color(randHex());
    setSub3Color(randHex());
    setB1Bg(randHex());
    setB1Color(randHex());
    setB2Bg(randHex());
    setB2Color(randHex());
  };

  const makeAccessible = () => {
    setHeaderBg("black");
    setHeaderColor("lime");
    setLinkColor1("lime");
    setLinkColor2("lime");
    setLinkColor3("lime");
    setMainBg("lightgray");
    setMainColor("black");
    setP1Color("black");
    setP2Color("black");
    setP3Color("black");
    setSub1Color("black");
    setSub2Color("black");
    setSub3Color("black");
    setB1Bg("white");
    setB1Color("black");
    setB2Bg("white");
    setB2Color("black");
  };

  return (
    <body
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <header
        style={{
          backgroundColor: headerBg,
          color: headerColor,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "70vw",
          height: "10vh",
        }}
      >
        <h2
          style={{
            backgroundColor: headerBg,
            color: headerColor,
            fontSize: "2.5rem",
          }}
        >
          Test Website
        </h2>
        <nav>
          <a
            style={{
              color: linkColor1,
              fontSize: "1.5rem",
              fontWeight: 600,
              padding: "0.5rem",
            }}
          >
            Link 1
          </a>
          <a
            style={{
              color: linkColor2,
              fontSize: "1.5rem",
              fontWeight: 600,
              padding: "0.5rem",
            }}
          >
            Link 2
          </a>
          <a
            style={{
              color: linkColor3,
              fontSize: "1.5rem",
              fontWeight: 600,
              padding: "0.5rem",
            }}
          >
            Link 3
          </a>
        </nav>
      </header>
      <main
        style={{
          backgroundColor: mainBg,
          color: mainColor,
          width: "70vw",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>My Page's Content</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ color: sub1Color }}>Subheader 1</h3>
          <p
            style={{
              color: p1Color,
              width: "70%",
              fontSize: "1rem",
              fontWeight: 600,
            }}
          >
            ethay irstfay ightlay ofyay awnday illedspay overyay ethay orizonhay
            , aintingpay ethay yskay inyay oftsay ueshay ofyay inkpay andyay
            oldgay . asyay ethay orldway eganbay otay irstay , ethay entlegay
            ustleray ofyay eaveslay andyay ethay istantday irpingchay ofyay
            irdsbay eatedcray ayay onysymphay ofyay orningmay oundssay . ewday
            ungclay otay ethay assgray ikelay inytay ewelsjay , isteningglay
            inyay ethay earlyyay unlightsay . inyay isthay anquiltray omentmay ,
            ossibilitiespay eemedsay endlessyay , invitingyay eamsdray andyay
            atthay erenesay ilighttway , erethay asway ayay ensesay ofyay
            osureclay andyay eflectionray , ayay eminderray atthay everyyay
            ayday , ithway itsyay upsyay andyay ownsday , ontributescay otay
            ethay ichray apestrytay ofyay ouryay iveslay . eachyay omentmay
            isyay eciouspray , invitingyay usyay otay ausepay , appreciateyay ,
            andyay embraceyay ethay eautybay allyay aroundyay usyay .
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ color: sub2Color }}>Subheader 2</h3>
          <p
            style={{
              color: p2Color,
              width: "70%",
              fontSize: "1rem",
              fontWeight: 600,
            }}
          >
            ethay irstfay ightlay ofyay awnday illedspay overyay ethay orizonhay
            oomingblay ossomsblay ingledmay ithway ethay earthyyay aromayay
            ofyay eshlyfray urnedtay oilsay , eatingcray anyay intoxicatingyay
            endblay atthay illedfay ethay airyay . eachyay owerflay eemedsay
            otay elltay ayay orystay , isperingwhay ecretssay ofyay esilienceray
            andyay eautybay , emindingray usyay atthay evenyay inyay ethay
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ color: sub3Color }}>Subheader 3</h3>
          <p
            style={{
              color: p3Color,
              width: "70%",
              fontSize: "1rem",
              fontWeight: 600,
            }}
          >
            ethay irstfay ightlay ofyay awnday illedspay overyay ethay orizonhay
            , aintingpay ethay yskay inyay oftsay ueshay ofyay inkpay andyay
            oldgay . asyay ethay orldway eganbay otay irstay , ethay entlegay
            ustleray ofyay eaveslay andyay ethay istantday irpingchay ofyay
            irdsbay eatedcray ayay onysymphay ofyay orningmay oundssay . ewday
            oclamationpray ofyay ethay ayday aheadyay . isthay ittlelay atthay
            erenesay ilighttway , erethay asway ayay ensesay ofyay osureclay
            andyay eflectionray , ayay eminderray atthay everyyay ayday , ithway
            itsyay upsyay andyay ownsday , ontributescay otay ethay ichray
            apestrytay ofyay ouryay iveslay . eachyay omentmay isyay eciouspray
            , invitingyay usyay otay ausepay , appreciateyay , andyay embraceyay
            ethay eautybay allyay aroundyay usyay .
          </p>
        </div>
        <div
          style={{ display: "flex", width: "100vw", justifyContent: "center" }}
        >
          <button
            onClick={whiteout}
            style={{
              padding: "2rem",
              margin: "0.5rem",
              backgroundColor: b1Bg,
              color: b1Color,
            }}
          >
            Whiteout
          </button>

          <button
            onClick={randomizeColors}
            style={{
              padding: "2rem",
              margin: "0.5rem",
              backgroundColor: b1Bg,
              color: b1Color,
            }}
          >
            Randomize Colors
          </button>
          <button
            onClick={makeAccessible}
            style={{
              padding: "2rem",
              margin: "0.5rem",
              backgroundColor: b2Bg,
              color: b2Color,
            }}
          >
            Make Accessible
          </button>
        </div>
      </main>
    </body>
  );
}

export default App;
