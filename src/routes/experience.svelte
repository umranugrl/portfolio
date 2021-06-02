<svelte:head>
  <title>Education</title>
</svelte:head>

<div class="govde">

  <div class="baslik"><h1>Deneyim</h1></div> 

  <div class="content">

    <div class="sol">
     
      <div class="sol1">
        <h4>12.2018 / 03.2019</h4>
      <p><b>ORKA BİLGİSAYAR YAZILIMLARI</b></p>
      <p style="color: gray;">YAZILIM DESTEK SORUMLUSU</p>
      <p>İş Açıklaması: Firmalardan gelen talepler doğrultusunda telefon ya da uzaktan desteklere yanıt vermek, CRM üzerinden, sistemlere faturaların her türlü düzenlenmesi, aktarılmasındaki sorunları gidermek, firmaya özel XSLT tasarım hazırlamak ve firmanın kullanımına sunmak, firma ve yazılım departmanı arasındaki bağlantıyı kurmak vb. desteklerde bulunmak.</p>
   
      <h4>08.2018 / 10.2018</h4>
      <p><b>TÜRKKEP KAYITLI ELEKTRONİK POSTA HİZMETLERİ A.Ş.</b></p>
      <p style="color: gray;">YAZILIM DESTEK SORUMLUSU</p>
      <p>İş Açıklaması: Firmalardan gelen 2.seviye desteklere yanıt vermek, MSSQL üzerinde ERP üzerinden sistemlere fatura aktarılmasını sağlamak, firmaya özel XSLT tasarım hazırlamak ve firmanın kullanımına sunmak, firma ve yazılım departmanı arasındaki bağlantıyı kurmak, raporlama hazırlamak.</p>
      </div>
      
    </div>

    <div class="sag">

      <div class="sag1">
      <h4>06.2017 / 08.2017</h4>
      <p><b>OTTOMAN CREATIVE</b></p>
      <p style="color: gray;">GRAFİK TASARIM ELEMANI</p>
      <p>İş Açıklaması: (STAJ) Firmalara özel banner, logo ve web site tasarımları hazırlamak, var olan tasarımlardaki firma talebi doğrultusunda revize yapmak.</p>
   
      <h4>09.2012 / 06.2013</h4>
      <p><b>KAYIŞDAĞI DARÜLACEZE</b></p>
      <p style="color: gray;">VERİ TABANI ELEMANI</p>
      <p>İş Açıklaması: (STAJ) Mssql veritabanı üzerinde scriptler hazırlayarak rapor hazırlamak.</p>
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
      width: 85%;
      height: 80vh;
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
  .sol{
    display: flex;
    justify-content:center;
    align-items: center;
    line-height: 1.5em;
    width: 80%;
    margin-left: 10px;
    font-family:quicksand,sans-serif!important; 
    font-size: 0.85rem;
  }
  @media all and (max-width:650px){
  .sol{
    margin-left: 5px;
   } 
  }
  .sag{
    display: flex;
    justify-content:center;
    align-items: center;
    line-height: 1.5em;
    width: 80%;
    font-size: 0.85rem;
    margin-left: 10px;
    font-family:quicksand,sans-serif!important; 
  }
  @media all and (max-width:650px){
    p{
    margin-right: 5px;
    font-size: 8px;
    line-height: 1.2em;
  }
  }
</style>