<svelte:head>
  <title>About Me</title>
</svelte:head>

<div class="govde">

  <div class="baslik"><h1>Hakkımda</h1></div> 

  <div class="content">

    <div class="sol"><p>1995 yılının Eylül ayında İstanbul'da dünyaya geldim. Liseyi Remzi Bayraktar Anadolu Ticaret ve Meslek Lisesi, Web tasarım bölümü olarak okudum. Lise son stajımı Kayışdağı Darülacezede yaptım. Daha sonra Karabük Üniversitesi, Safranbolu Meslek Yüksek Okulu, Bilgisayar Teknolojisi bölümünü okudum. 2. sınıf yaz stajımı Ottoman Creative şirketinde yaptım. Kendimi geliştirmek için bir kaç muhasebe yazılımı yapan şirketlerde çalıştım. Şuan Karadeniz Teknik Üniversitesi, Of Teknoloji Fakültesinde Yazılım Mühendisliği okumaktayım. </p></div>

    <div class="sag"><img src="orta.jpg" alt="" width="450px" height="350px"></div></div>

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
  .content{
    display:flex;
    justify-content:center;
    align-items: center;
    position:static;
    background-color: rgb(234, 238, 236);
    margin-left: 35px;
    width: 90%;
    height: 550px
  }
  h1{
    width: 150px;
    padding: 10px 10px 10px 40px;
    text-align: right;
    background-color: #9bd952;
    color: #fff;
    line-height: 1.1em;
  }
  .sol{
    display: flex;
    justify-content:center;
    align-items: center;
    width: 500px;
    height: 350px;
    font-size: 18px;
    font-family:quicksand,sans-serif!important;  
  }
  .sag{
    display: flex;
    justify-content:center;
    align-items: center;
    height: 350px;
    width: 500px;
    margin-left: 10px;
  }
 
</style>