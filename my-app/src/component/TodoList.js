const TodoList = ({ list }) => (
    <div>
    {
        list.map((item) => {
            return <li>{item}</li>;
        })
    }
    </div>
);

export default TodoList;