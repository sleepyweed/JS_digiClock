onload=()=>{
  const retime1=()=>{
  //1秒後執行retime1
  setTimeout(retime1,1000)
  //每次載入都取得一個時間值"()"執行
  const nt = new Date();
  //Thu Jan 07 2021 20:30:41 GMT+0800 (台北標準時間)


  //個位數
  const hd=nt.getHours()%10;
  const md=nt.getMinutes()%10;
  const sd=nt.getSeconds()%10;

  //十位數
  const ht=Math.floor(nt.getHours()/10);
  const mt=Math.floor(nt.getMinutes()/10);
  const st=Math.floor(nt.getSeconds()/10);

  document.querySelector("#ck1").className="c"+ht;
  document.querySelector("#ck2").className="c"+hd;
  document.querySelector("#ck3").className="c"+mt;
  document.querySelector("#ck4").className="c"+md;
  document.querySelector("#ck5").className="c"+st;
  document.querySelector("#ck6").className="c"+sd;

  document.querySelectorAll(".cc")[0].style.opacity=1;
  document.querySelectorAll(".cc")[1].style.opacity=1;

  setTimeout(function(){
    document.querySelectorAll(".cc")[0].style.opacity=0;
    document.querySelectorAll(".cc")[1].style.opacity=0;
  },500)
  }
  retime1();
  /////////////////////////////////////////////////////

  //補零的function
  // function checkZero(num){
  //   return (num<10)?("0"+num):num
  // }

  const checkZero = num => (num<10)?("0"+num):num

  ////////////////////////////////////////////////////

  const wordDate=['SUN', 'MON', 'TUS', 'WED', 'THR', 'FRI', 'SAT']
  const retime2=()=>{

    // setTimeout(retime2,1000)
    const nt = new Date();
    
    const ch=nt.getHours();//00-09要補零
    const cm=nt.getMinutes();//00-09要補零
    const cs=nt.getSeconds();//00-09要補零

    const yy=nt.getFullYear();
    const mm=nt.getMonth()+1;//getMonth的設定為何從1開始
    const dd=nt.getDate();
    const ww=nt.getDay();


      document.querySelector("#clkTime").textContent=checkZero(ch)+":"+checkZero(cm)+":"+checkZero(cs);
      document.querySelector("#clkDate").textContent=checkZero(yy)+"-"+checkZero(mm)+"-"+checkZero(dd)+"  "+wordDate[ww];
  }
  retime2();
  setInterval(retime2, 1000);

}