class App extends React.Component {
    //상태관리 value값을 무시하고 입력할 수 있도록~
    constructor(props){
        super(props);
        this.refId = React.createRef();
        this.state = {
            번호: 1,
            아이디: '',
            비밀번호: '',
            이름: '',
            이메일: '',
            회원:[], //뿌려줄 데이터 가져와서 저장해야 함.
            수정하기 : false
        }
    }
    onChangeId = (e) =>{
        // console.log(e.target.value)
        this.setState({
            아이디: e.target.value
        });
    }
    onChangePw = (e) =>{
        // console.log(e.target.value)
        this.setState({
            비밀번호: e.target.value
        });
    }
    onChangeName = (e) =>{
        // console.log(e.target.value)
        this.setState({
            이름: e.target.value
        });
    }
    onChangeEmail = (e) =>{
        // console.log(e.target.value)
        this.setState({
            이메일: e.target.value
        });
    }
    //저장하기
    onClickAdd = (e) => {
        e.preventDefault();

        //curd(create, read, update, delete)
        // 로컬스토리지(local stroage)에 저장하기
        //localStorage.length; 전체 길이
        //localStorage.setItem(키(key), 키값(Value)); 데이터(문자열) 저장하기
        //localStorage.getItem(키(key)); 데이터 가져오기
        //localStorage.removeItem(키(key)); 데이터 삭제하기
        //localStorage.setItem(`num-${localStorage.length+1}`,`${this.state.아이디}, ${this.state.비밀번호}, ${this.state.이름}, ${this.state.이메일}`)
        //로컬스토리지에 저장될 객체를 임시 생성

        let 멤버 = {
            번호: this.state.번호, 
            아이디: this.state.아이디,
            비밀번호: this.state.비밀번호,
            이름: this.state.이름,
            이메일: this.state.이메일
        }
    
        localStorage.setItem(멤버.번호, JSON.stringify(멤버))
        this.memberListLoad();
        /*데이터저장: 객체형식으로 저장(object)
          로컬스토리지에 객체형식 저장 못함.
          그래서 문자열형식(JSON.stringfly())으로 변경해야 함.
          자동증가: this.state.번호+1; 다음 번호
          초기화: 다음 입력값을 위해서 입력상자를 비움.
          그리고 번호가 1씩 증가
        */

        //   this.setState({번호: this.state.번호 + 1});
          this.setState({
            아이디: '',
            비밀번호: '',
            이름: '',
            이메일: '',
            수정하기: false
         });
          this.refId.current.focus();

          //Ref: 초기화하고 커서가 아이디에서 깜빡깜빡 포커스(아이디.focus())
          //1. DOM 요소를 생성해서 등록한다. root. 변수생성 this.redID=React.createRef();
          //2. input 선택자 요소에 등록 연결(ref = this.refId)
          //3. 초기화 위치에 포커싱(this.refId.current.focus());
    }

    memberListLoad = () => {
        let 멤버= [];
        for(let i = 0; i < localStorage.length; i++){
            멤버.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }

        this.setState({
            회원 : 멤버
        })

        let max = 0;
        for(let i = 0; i < localStorage.length; i++){
            if(max < Number(localStorage.key(i))){ //key값보다 max가 작으면,
                max = Number(localStorage.key(i))
            }
        }
        this.setState({번호: max + 1}) 
    }

    //가져오기 컴포넌트 디드마운트(생명주기)
    componentDidMount(){

        this.memberListLoad();

        //데이터를 가져올 때
        /*console.log(localStorage.getItem(1));
        console.log(localStorage.getItem(2));
        console.log(localStorage.getItem('num-3')); // 키가 num-3인 친구
        console.log(localStorage.getItem(localStorage.key(0))); //제일 앞에 있는 key

        //key값을 가져올 때
        console.log(localStorage.key(0)); // 0번째에 있는 key값을 부름, 'key'를 부름.
        console.log(localStorage.key(1)); 
        console.log(localStorage.key(2)); 

        for(let i = 0; i < localStorage.length; i++){
            console.log(JSON.parse(localStorage.getItem(localStorage.key(i)))) //객체로 만들기 위해서
        }

        멤버= [];
        for(let i = 0; i < localStorage.length; i++){
            멤버.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
        // console.log('멤버', 멤버)

        this.setState({
            회원 : 멤버
        }) */
    }

    //삭제버튼, const 쓰지 않음.
    onClickDeletefn = (deleteBun) => {
        localStorage.removeItem( deleteBun );
        this.memberListLoad();  //모든데이터 변경 업데이트 출력정보 출력

        /*e.preventDefault;
        this.props.onClickDeletefn(bun)
        localStorage.removeItem(bun);*/
    }

    //수정하기 함수
    onClickUpdatefn = (updateBun) => {
        let imsiObj = {}
        imsiObj = JSON.parse(localStorage.getItem(updateBun));

        this.setState({
            번호: updateBun,
            아이디: imsiObj.아이디,
            비밀번호: imsiObj.비밀번호,
            이름: imsiObj.이름,
            이메일: imsiObj.이메일,
            수정하기: true
        })
    }
    
    //e가 없으면 allow function 쓸 수 없음! 반드시 e나 event를 꼭 써줄 것!
    render() {
        //const는 render 안에!
        return (
            <div id="app">
                <h1>회원가입</h1>
                <div id="member">
                    <form onSubmit={this.onClickAdd}>
                        <div><input ref={this.refId} onChange={this.onChangeId} type="text" id='id' value={this.state.아이디} placeholder='id 입력' /></div>
                        <div><input onChange={this.onChangePw} type="password" id='password' value={this.state.비밀번호} placeholder='password 입력' /></div>
                        <div><input onChange={this.onChangeName} type="text" id='name' value={this.state.이름} placeholder='Name 입력' /></div>
                        <div><input onChange={this.onChangeEmail} type="email" id='email' value={this.state.이메일} placeholder='Email 입력' /></div>
                        <div><button type='submit' style={this.state.수정하기? style2: style1}/*onClick={this.onClickAdd}*/>{this.state.수정하기? `UPDATE`:`ADD`}</button></div>
                    </form>
                </div>
                <ListComponent 회원={this.state.회원} onClickDeletefn={this.onClickDeletefn}  onClickUpdatefn={this.onClickUpdatefn}/>
            </div>
        );
    }
}

class ListComponent extends React.Component{
    //삭제하기
    onClickDelete=(e, bun)=>{
        e.preventDefault();
        this.props.onClickDeletefn(bun)
    }
    onClickUpdate=(e, bun)=>{
        e.preventDefault();
        this.props.onClickUpdatefn(bun)
    }
    render(){
        // this.props.fn();
        return(
            <div className = "list-box">
                    <table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>아이디</th>
                                <th>비밀번호</th>
                                <th>이름</th>
                                <th>이메일</th>
                                <th>수정</th>
                                <th>삭제</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.회원.map((item)=> {
                                    return(
                                        <tr key={item.번호}>
                                            <td>{item.번호}</td>
                                            <td>{item.아이디}</td>
                                            <td>{item.비밀번호}</td>
                                            <td>{item.이름}</td>
                                            <td>{item.이메일}</td>
                                            <td><button onClick={(e)=>{this.onClickUpdate(e,item.번호)}}>수정</button></td>
                                            <td><button onClick={(e)=>{this.onClickDelete(e,item.번호)}}>삭제</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>/* className = "list-box" */
        )
    }
}

const style1={
    color: '#069', fontSize: '16px'
}

const style2={
    color: '#944', fontSize: '16px'
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)