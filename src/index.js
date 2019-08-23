import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom'
import title_1 from './images/title_1.jpg';
import header_logo from './images/header_logo.png';
import srt_1 from './images/start_1.jpg';
import srt_2 from './images/start_2.jpg';
import srt_3 from './images/start_3.jpg';
import srt_4 from './images/start_4.jpg';
import srt_5 from './images/start_5.jpg';
import srt_6 from './images/start_6.jpg';
import jan_P from './images/hand_P.jpg';
import jan_G from './images/hand_G.jpg';
import jan_C from './images/hand_C.jpg';
import lose_A_0 from './images/lose_0.jpg';
import lose_A_1 from './images/lose_1.jpg';
import lose_1_2 from './images/lose_2.jpg';
import lose_1_3 from './images/lose_3.jpg';
import lose_1_4 from './images/lose_4.jpg';
import lose_1_5 from './images/lose_5.jpg';
import lose_A_E from './images/lose_6.jpg';
import lose_2_2 from './images/lose2_2.jpg';
import lose_2_3 from './images/lose2_3.jpg';
import lose_2_4 from './images/lose2_4.jpg';
import lose_2_5 from './images/lose2_5.jpg';
import lose_3_2 from './images/lose3_2.jpg';
import lose_3_3 from './images/lose3_3.jpg';
import lose_3_4 from './images/lose3_4.jpg';
import ef_1 from './images/ef_1.jpg';
import ef_2 from './images/ef_2.png';
import ef_3 from './images/ef_3.png';
import ef_4 from './images/ef_4.png';
import ef_5 from './images/ef_5.png';
import end_1 from './images/end_1.jpg';
import end_2 from './images/end_2.jpg';
import end_3 from './images/end_3.jpg';
//import caution from './images/caution.jpg';
import './index.css';

const HALF =1200
const VSHORT =1600
const SHORT =2000;
const MID  =2500;
const LONG =3000;





class Titles extends React.Component {
  constructor(){
    super();
    this.state={
      loadClass: '',
      circleClass: '',
      spinClass: '',
      hideClass:'',
      progress: 0,
      preload: 0
    };
  }
  componentDidMount()
  {
    this.loadcnt=0;
    this.imgload()
  }

  imgload()
  {
    //path格納
    this.imgPath =[title_1,header_logo,srt_1,srt_2,srt_3,srt_4,srt_5,srt_6,jan_P,jan_G,jan_C,lose_A_0,lose_A_1,lose_1_2,lose_1_3,lose_1_4,lose_1_5,lose_A_E,lose_2_2,lose_2_3,lose_2_4,lose_2_5,lose_3_2,lose_3_3,lose_3_4,ef_1,ef_2,ef_3,ef_4,ef_5,end_1,end_2,end_3]; 
    //イメージオブジェクト作成(画像数繰り返し)
    this.loadfinishcnt=0;
    for(this.loadcnt=0;this.loadcnt<31;this.loadcnt++)
    {
      let imgObj = new Image();
      imgObj.src = this.imgPath[this.loadcnt];
    
      imgObj.onload = () => {
        this.loadfinishcnt++;
        this.nowprogress=this.state.preload*3+7;
        this.targetprogress=(this.state.preload+1)*3+7;
        this.setState({ preload:  this.state.preload+1});
        this.loadFinishFlag=false;
        while (!this.loadFinishFlag)
        {
          this.nowprogress += (this.targetprogress - this.nowprogress) * 0.2+0.1;
          this.floorednowprogress = Math.floor(this.nowprogress);
          this.setState({ progress:  this.floorednowprogress});
          if(this.targetprogress<=this.floorednowprogress)
          {
            this.loadFinishFlag=true;
          }
        }
        if(this.loadfinishcnt===31)
        {
          this.delaytime=0;
          this.loadInterval=setInterval(() => {
            this.delaytime++;
            if(this.delaytime>=1)
            {
              this.setState({ loadClass:  "load_finished",circleClass: "circle_finished",spinClass:"spin_finished"});
              clearInterval(this.loadInterval)
              this.loadInterval=setInterval(() => {
                this.delaytime++;
                if(this.delaytime>=2)
                {
                  this.setState({ hideClass:"hide"});
                  clearInterval(this.loadInterval)
                }},2000);
            }},100);

        }
      }
    }
   

  }

  render(){
      return(
        <div className="wrap">
          <div className="header">
              <h1><a href="./"><img src={header_logo} alt=""/></a></h1>
              <nav>
                  <ul>
                      <li><a href="#">DUMMY</a></li><li><a href="#">HARIBOTE</a></li><li><a href="#">NOTHING</a></li><li><a href="#">KYOMU</a></li>
                  </ul>
              </nav>
              <ul className="SNS_box">
                <li><a className="SNS SNS_t" href="https://twitter.com/ITkusodokata">twitter</a></li>
                <li><a className="SNS SNS_f" href="#">facebook</a></li>
              </ul>
          </div>
          <div className="title">
          </div>
          <div className="janken_logo">
          </div>
          <section className="button_area">
              <button onClick={ () => this.play() }>GAME START</button>
          </section>
          <div className="cautions_area">
            <section>
                <h2>ゲームに関する注意</h2>
                <p><span>※ 勝てません</span><br/>
                  また、このゲームはあくまでパロディであり、<br/>
                  現実のキャンペーンではありません。<br/>

                  魔剤は用法用量を守って、楽しめる範囲で飲みましょう。
                </p>
                <p>ゲームは新しいウィンドウで開きます。<br/>
                  スマートフォンでのプレイは推奨しておりませんが、<br/>
                  その際は画面を横向きにしてください。<br/>
                </p>
              </section>
          </div>
          <section className="help_area"></section>
          <section className="omake_area">
            <h2>おまけ</h2>
            <h3>俺さ、そろそろおまけなんだよね</h3>
          </section>
          <footer>
          <section>
                <h2>免責事項</h2>
                <p>当サイトは個人によりジョークと内輪ネタで作られたサイトです。<br/>
                  サイト内の記載やイラスト等はあらゆる企業・団体にも関係しておりません。<br/>
                  当サイトを利用することにより発生したいかなる損害に対しても、<br/>
                  作成者は責任を負いかねます。
                </p>
            </section>
          </footer>
      
          <div className={"load_wrap"+" "+this.state.loadClass+" "+this.state.hideClass}>
            <div className={"load_circle"+" "+this.state.circleClass}>
                <span>{this.state.progress}</span>％
            </div>
            <div className={"load_text"+" "+this.state.spinClass+" "+this.state.hideClass}>Loading...</div>
            <div className={"load_spin_box"+" "+this.state.spinClass+" "+this.state.hideClass}>
              <div className={"load_spin"+" "+this.state.spinClass+" "+this.state.hideClass}></div>
              <div className={"load_mask"+" "+this.state.spinClass+" "+this.state.hideClass}></div>
              <div className={"load_mask2"+" "+this.state.spinClass+" "+this.state.hideClass}></div>
            </div>
          </div>
        </div>
      )
    
  }
  play(){
    window.open('/game',null, 'top=0,left=100,width=785,height=532');
  }
}

class Game extends React.Component{
  constructor(){
    super();
    this.object={
      img: [title_1,ef_1,ef_1,srt_1,srt_2,srt_3,srt_4,srt_5,srt_6,srt_6],
      cls: ["def","EF1_prepare","EF1","def","def","def","def","def","def","choose"],
      exc: [1,6,0,0,0,0,0,0,2,3],
      ivl : [0,0,800,LONG,SHORT,MID,MID,MID,SHORT,LONG,"END"],
      auto:false
    };
  }
  
  render(){
    return(
      this.Bgchange=<Bgchange props={this.object}/>
    )

  }
}

class Bgchange extends React.Component {
  constructor(props){
    super(props);
    this.obj=Object.values(props);
    this.parentjanken=this.obj[1];
    this.obj=Object.values(this.obj[0]);

    this.images=this.obj[0];
    this.classes=this.obj[1];
    this.exContents=this.obj[2];
    this.intervaltime=this.obj[3];
    this.auto=this.obj[4];
    this.exContents[0]=this.excIndex(this.exContents[0])

    this.state={
      img: this.images[0],
      exContent:this.exContents[0],
      clsname:this.classes[0],
    };
    this.cnt=1;
    if(this.auto)
    {
      this.play();
    }
  }
  
  play (){
    this.getUrl();
    this.cnt++;
    this.repeatInterval();
  }
  redo(){
    this.images=[title_1,ef_1,srt_1,srt_2,srt_3,srt_4,srt_5,srt_6,srt_6];
    this.classes=["def","EF1","def","def","def","def","def","def","choose"];
    this.exContents=[1,0,0,0,0,0,0,2,3];
    this.intervaltime=[0,0,LONG,SHORT,MID,MID,MID,SHORT,LONG,"END"];
    this.auto=false;
    this.cnt=0;
    this.exContents[0]=this.excIndex(this.exContents[0]);
    this.setState({
      img : this.images[0],
      clsname: this.classes[0],
      exContent: this.exContents[0],
    });
  }

  repeatInterval(){
    this.interval = setInterval(() => this.pgCount(), this.intervaltime[this.cnt]);
  }

  getUrl(){
    this.exContents[this.cnt]=this.excIndex(this.exContents[this.cnt]);
    this.setState({
        img : this.images[this.cnt],
        clsname: this.classes[this.cnt],
        exContent: this.exContents[this.cnt],
      });
  }
    
  pgCount(){
    this.getUrl();
    this.cnt++;
    
    if(this.intervaltime[this.cnt]==="END")
    {
      clearInterval(this.interval);
    }
    else if(this.intervaltime[this.cnt-1]!==this.intervaltime[this.cnt])
    {
      clearInterval(this.interval);
      this.repeatInterval();
    }
  }


  excIndex(num){
    if(num===0)
    {
      this.val="";
    }
    else if(num===1)
    {
      this.val=(<div className="play" onClick={() => this.play()}></div>);
    }
    else if(num===2)
    {
      this.val=(<img className="EF2" src={ef_2} alt=""/>);
    }
    else if(num===3)
    {
      this.val=(<div className="button_box">
      <button className="jan" onClick={ () => this.jankenResult('G') }>#HKにグーで勝つ</button><br/>
      <button className="jan" onClick={ () => this.jankenResult('C') }>#HKにチョキで勝つ</button><br/>
      <button className="jan" onClick={ () => this.jankenResult('P') }>#HKにパーで勝つ</button>
      </div>);
    }
    else if(num===4)
    {
      this.val=(
      <div>
        <img className="EF3" src={ef_3} alt=""/>
        <img className="EF4" src={ef_4} alt=""/>
        <img className="EF5" src={ef_5} alt=""/>
      </div>);
    }
    else if(num===5)
    {
      this.val=(
      <div className="end_box">
        <button className="redo" onClick={() => this.redo()}>もっかい</button>
        <button className="close" onClick={() => window.open('','_self').close()}>やめる</button>
      </div>);
    }
    else if(num===6)
    {
      this.val=(
        <div className="load_spin_box">
          <div className="load_spin"></div>
          <div className="load_mask"></div>
          <div className="load_mask2"></div>
        </div>
      );
    }

    return(this.val);
  }

  jankenResult(hand){
    this.newObject=this.janken(hand);
    this.newObject=Object.values(this.newObject);
  
    this.images=this.newObject[0];
    this.classes=this.newObject[1];
    this.exContents=this.newObject[2];
    this.intervaltime=this.newObject[3];
    this.auto=this.newObject[4];
    this.cnt=0;
    this.play();
  }
  
  janken(hand){
    switch (hand) {
      case 'G':
          this.HK_hand=jan_P;
        break;
      case 'C':
          this.HK_hand=jan_G;
        break;
      case 'P':
          this.HK_hand=jan_C;
        break;
      default:
        ;
    }

    this.random = Math.floor( Math.random() * 3 );
    switch (this.random) {
      case 0:
          this.imgL=[srt_5,this.HK_hand,this.HK_hand,lose_A_0,lose_A_1,lose_1_2,lose_1_3,lose_1_4,lose_1_5,lose_A_E,end_1,end_2,end_3,end_3];
          this.clsL=["def","def","def","def","def","def","def","def","def","def","def","def","def","mask"];
          this.excL=[0,0,4,4,4,0,0,0,0,0,0,0,0,5];
          this.ivlL=[HALF,SHORT,VSHORT,HALF,VSHORT,VSHORT,MID,MID,SHORT,MID,LONG,LONG,SHORT,LONG,"END"];
        break;
      case 1:
          this.imgL=[srt_5,this.HK_hand,this.HK_hand,lose_A_0,lose_A_1,lose_2_2,lose_2_3,lose_2_4,lose_2_5,lose_A_E,end_1,end_2,end_3,end_3];
          this.clsL=["def","def","def","def","def","def","def","def","def","def","def","def","def","mask"];
          this.excL=[0,0,4,4,4,0,0,0,0,0,0,0,0,5];
          this.ivlL=[HALF,SHORT,VSHORT,HALF,VSHORT,VSHORT,SHORT,MID,MID,MID,LONG,LONG,SHORT,LONG,"END"];
        break;
      case 2:
          this.imgL=[srt_5,this.HK_hand,this.HK_hand,lose_A_0,lose_A_1,lose_3_2,lose_3_3,lose_3_4,lose_A_E,end_1,end_2,end_3,end_3];
          this.clsL=["def","def","def","def","def","def","def","def","def","def","def","def","mask"];
          this.excL=[0,0,4,4,4,0,0,0,0,0,0,0,5];
          this.ivlL=[HALF,SHORT,VSHORT,HALF,VSHORT,VSHORT,SHORT,MID,MID,LONG,LONG,SHORT,LONG,"END"];
        break;
      default:
        ;
    }

    this.lose={
      img: this.imgL,
      cls: this.clsL,
      exc: this.excL,
      ivl : this.ivlL,
      auto:true
    };
  return(this.lose);
  }

  render() {
    return (
      <div className="game_wrap"> 
        <div className="HKimg">
          <img className={this.state.clsname} src={this.state.img} alt=""/>
          {this.state.exContent}
        </div>
        <div className="filter_left">
          <h2>しつもんコーナー</h2>
          <p><span className="QA_Question">Ｑ</span> ロードが長過ぎる<br/>
          <span className="QA_Answer">Ａ</span> ごめんなさい</p>
          <p><span className="QA_Question">Ｑ</span>  絵が下手過ぎる<br/>
          <span className="QA_Answer">Ａ</span> ごめんなさい</p>
          <p><span className="QA_Question">Ｑ</span>  スマホでやりづらいんだけど<br/>
          <span className="QA_Answer">Ａ</span> ごめんなさい</p>
          <p><span className="QA_Question">Ｑ</span>  画面切替がガタガタ<br/>
          <span className="QA_Answer">Ａ</span> ごめんなさい</p>
          <p><span className="QA_Question">Ｑ</span>  音が出ない<br/>
          <span className="QA_Answer">Ａ</span> ごめんなさい</p>
          <p><span className="QA_Question">Ｑ</span>  勝てねえよ<br/>
          <span className="QA_Answer">Ａ</span> 仕様です</p>
          <p><span className="QA_Question">Ｑ</span> このキャラ嫌い<br/>
          <span className="QA_Answer">Ａ</span> すこれ</p>
          <p><span className="QA_Question">Ｑ</span>  ゲームがつまらない<br/>
          <span className="QA_Answer">Ａ</span> いやーほならね、自分が作ってみろって話でしょ？そう私はそう言いたいですけどね。こっちは、こっちはみんなを楽しませるためにじゃんけんのゲームを…作っているわけでして、 やっぱり、前はちょっとシンプルだったのですが、 いや…ちょっとゲームやっぱ凝ったゲームがいいかなーと思って まあゲーム作り始めたわけですけども。そんな、「ゲームつまんない」とか言われたら、じゃあお前が作れって話でしょ、だと思いますけどね？ええ。結構ー……ゲーム作るのは大変だと思いますよ。ゲームの構図、から考えなあかんし。「つまんない」と言うんだったら自分が作ってみろ！っていう話でしょ？私はそう言いたい。うん。</p>
        </div>
        <div className="filter_below"></div>
        <div className="portrait_caution">
          <p>画面を横に向けてください</p>
        </div>
      </div>
    )
  }
}

const App = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Titles} />
      <Route path="/game" component={Game} />
    </div>
  </BrowserRouter>
  );

  
  // ========================================
  ReactDOM.render(
    App,
    document.getElementById('root')
  );
