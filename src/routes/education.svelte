<svelte:head>
  <title>Education</title>
</svelte:head>

<div class="govde">

  <div class="baslik"><h1>Eğitim</h1></div> 

  <div class="content">

    <div class="sol">
      <div class="egitim">
       
        <h4>2019/Devam</h4>
        <p><b>Karadeniz Teknik Üniversitesi</b></p>
        <p style="color: gray;">Of Teknoloji Fakültesi</p>
        <p>Yazılım Mühendisliği</p>
     
        <h4>2014/2016</h4>
        <p><b>Karabük Üniversitesi</b></p>
        <p style="color: gray;">Safranbolu Meslek Yüksek Okulu</p>
        <p>Bilgisayar Teknolojisi</p>
      
        <h4>2009/2013</h4>
        <p><b>Remzi Bayraktar</b></p>
        <p style="color: gray;">Anadolu Ticaret ve Meslek Lisesi</p>
        <p>Web Tasarımı</p>

      </div>
    </div>

    <div class="sag">
      
      <div class="design">

        <h2>Tasarım Becerileri</h2>
          <h5>Web Tasarım</h5>
          <div class="a">
            <div class="deger"></div>
          </div>
        
          <h5>Grafik Tasarım</h5>
          <div class="a">
            <div class="deger1"></div>

          </div>

        <h2>Kodlama Becerileri</h2>
          <h5>HTML</h5>
          <div class="a">
            <div class="deger2"></div>
          </div>
        
          <h5>CSS</h5>
          <div class="a">
            <div class="deger3"></div>
          </div>
     
          <h5>JAVASCRIPT</h5>
          <div class="a">
            <div class="deger4"></div>
          </div>
        
          <h5>PHP</h5>
          <div class="a">
            <div class="deger5"></div>
          </div>

          <h5>C++</h5>
          <div class="a">
            <div class="deger6"></div>
          </div>

          <h5>C#</h5>
          <div class="a">
            <div class="deger7"></div>
          </div>

        </div>
      </div>
    </div>
</div>

<style>
  .govde{
    display:inline;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .baslik{
    display:flex;
    justify-content:left;
    position:absolute;
    margin-top: 5px;
    margin-left: 5px;
    align-items: center;
  }
  h1{
    width: 65%;
    padding: 10px 10px 10px 60px;
    text-align: right;
    background-color: #9bd952;
    color: #fff;
    line-height: 1.1em;
  }
  @media all and (max-width:650px){
    h1{
    font-size: 10px;
    text-align: right;
    line-height: 0.5em;
  }
  }
  .content{
    display:flex;
    justify-content:center;
    align-items: center;
    position:static;
    background-color: rgb(234, 238, 236);
    margin-left: 20px;
    width: 94%;
    height: 90vh;
  }
  @media all and (max-width:650px){
    .content{
      height: 60vh;
      width: 85%;
  }
  }
  .sol{
    display: flex;
    justify-content:center;
    align-items: center;
    width: 80%;
    margin-left: 10px;
    font-family:quicksand,sans-serif!important;   
  }
  @media all and (max-width:650px){
  .sol{
    margin-left: 5px;
   } 
  }
  h4{
    width: 90%;
    padding: 10px;
    text-align: center;
    background-color: #9bd952;
    color: #fff;
    line-height: 1;
  }
  @media all and (max-width:650px){
    h4{
    font-size: 10px;
    width: 70%;
    padding: 5px;
  }
  }
  .egitim{
    display: inline;
    justify-content:center;
    align-items: center;
  }
  p{
    display:flex;
    font-size: 17px;
    line-height: 0.9em;
  }
  @media all and (max-width:650px){
  p{
    font-size: 9px;
   } 
  }
  .sag{
    display: flex;
    justify-content:center;
    align-items: center;
    width: 80%;
    font-family:quicksand,sans-serif!important;
  }
  h2{
    font-weight: bold;
  }
  h5{
    font-size: 16px;
  }
  @media all and (max-width:650px){
    h2{
      font-size: 10px;
    }
    h5{
    font-size: 9px;
    }
  }
  .a{
    background-color: transparent;
    border: 2px solid #9bd952 ;
    box-sizing: border-box;
    height: 19px;
    margin-bottom: 10px;
    width: 100%;
    border-radius: 9px;
    padding: 0;
  } 
  @media all and (max-width:650px){
    .a{
      height: 10px;
      width: 80%;
  }
  }
  .deger{
    width: 65%;
    border: 1px solid #fff;
    background-color: #9bd952;
    border-radius: 7px;
    height: 13px;
  }
  @media all and (max-width:650px){
    .deger{
      height: 5px;
  }
  }
  .deger1{
    width: 50%;
    border: 1px solid #fff;
    background-color: #9bd952;
    border-radius: 7px;
    height: 13px;
  }
  @media all and (max-width:650px){
    .deger1{
      height: 5px;
  }
  }
  .deger2{
    width: 80%;
    border: 1px solid #fff;
    background-color: #9bd952;
    border-radius: 7px;
    height: 13px;
  }
  @media all and (max-width:650px){
    .deger2{
      height: 5px;
  }
  }
  .deger3{
    width: 70%;
    border: 1px solid #fff;
    background-color: #9bd952;
    border-radius: 7px;
    height: 13px;
  }
  @media all and (max-width:650px){
    .deger3{
      height: 5px;
  }
  }
  .deger4{
    width: 10%;
    border: 1px solid #fff;
    background-color: #9bd952;
    border-radius: 7px;
    height: 13px;
  }
  @media all and (max-width:650px){
    .deger4{
      height: 5px;
  }
  }
  .deger5{
    width: 20%;
    border: 1px solid #fff;
    background-color: #9bd952;
    border-radius: 7px;
    height: 13px;
  }
  @media all and (max-width:650px){
    .deger5{
      height: 5px;
  }
  }
  .deger6{
    width: 60%;
    border: 1px solid #fff;
    background-color: #9bd952;
    border-radius: 7px;
    height: 13px;
  }
  @media all and (max-width:650px){
    .deger6{
      height: 5px;
  }
  }
  .deger7{
    width: 60%;
    border: 1px solid #fff;
    background-color: #9bd952;
    border-radius: 7px;
    height: 13px;
  }
  @media all and (max-width:650px){
    .deger7{
      height: 5px;
  }
  }
</style>