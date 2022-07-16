function formatName(user){
    const {firstName,lastName} = user;
    return`${firstName} ${lastName}`
  }
  
  const User = {
    firstName:"twohundred",
    lastName:"lee"
  }
  
  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
  
  // react element
  
  // const element = (
  //   <div>
  //     {getGreeting(User)}
  //   </div>
  // )
  
  // Function Component (FC)
  
  // GoogleSearch <GoogleSearch />
  
  function Welcome(props) {
    const {name,age} = props;
    return <div>
    <div>Hello, {name}</div>
    <div>Ages:{age}</div>
    </div>
  }

// 創建一個使用了Welcome元件的React元素
const element = <div>
  <Welcome name="Sara" age={20}/>
  <Welcome name="Apple" age={21}/>
  <Welcome name="Frog" age={22}/>
</div>;

const rootDOM = document.querySelector("#root")

createRoot(rootDOM).render(element)