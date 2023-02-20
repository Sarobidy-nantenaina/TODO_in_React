export function Input(props) {
    const { onChange, onKeyUp } = props;

    return (
        <input type="text" onChange={onChange} onKeyUp={onKeyUp}/>
    );
}