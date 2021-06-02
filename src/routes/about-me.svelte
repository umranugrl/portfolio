<svelte:head>
  <title>About Me</title>
</svelte:head>

<div class="govde">

  <div class="baslik"><h1>Hakkımda</h1></div> 

  <div class="content">

    <div class="sol"><p>1995 yılının Eylül ayında İstanbul'da dünyaya geldim. Liseyi Remzi Bayraktar Anadolu Ticaret ve Meslek Lisesi, Web tasarım bölümü olarak okudum. Lise son stajımı Kayışdağı Darülacezede yaptım. Daha sonra Karabük Üniversitesi, Safranbolu Meslek Yüksek Okulu, Bilgisayar Teknolojisi bölümünü okudum. 2. sınıf yaz stajımı Ottoman Creative şirketinde yaptım. Kendimi geliştirmek için bir kaç muhasebe yazılımı yapan şirketlerde çalıştım. Şuan Karadeniz Teknik Üniversitesi, Of Teknoloji Fakültesinde Yazılım Mühendisliği okumaktayım. </p></div>

    <div class="sag"><img class="resim" src="orta.jpg" alt=""></div></div>

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
    margin-left: 15px;
    margin-top: 10px;
    align-items: center;
  }
  .resim{
    width: 85%; 
    height: 75%;
  }
  @media all and (max-width:650px){
   .resim {
    width: 60%; 
    height: 30%;
   } 
  }
  .content{
    font-size: 90%;
    display:flex;
    justify-content:center;
    align-items: center;
    position:static;
    background-color: rgb(234, 238, 236);
    margin-left: 20px;
    width: 94%;
    height: 70vh;
  }
  @media all and (max-width:650px){
  .content{
     height: 60vh;
   } 
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
  .baslik{
    display:flex;
    justify-content:left;
    position:absolute;
    margin-top: 5px;
    margin-left: 5px;
    align-items: center;
  }
  .sol{
    display: flex;
    justify-content:center;
    align-items: center;
    width: 80%;
    height: 100%;
    padding-left: 20px;
    font-size: 16px;
    font-family:quicksand,sans-serif!important;  
  }
  @media all and (max-width:650px){
   .sol {
     font-size: 10px;
   } 
  }
  .sag{
    display: flex;
    justify-content:center;
    align-items: center;
    width: 80%;
    height: 100%;
  }
</style>