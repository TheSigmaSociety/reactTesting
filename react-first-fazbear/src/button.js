const RequestsGET = () => {
    return (
        <div className="flex flex-col justify-center items-left">
        <button className="mt-10 bg-green-500 border-cyan-200 text-white rounded-3xl w-64 h-16 text-2xl custom inline-block" onClick={print}>this is a mega test  (GET)</button>
      </div>
    );
};
function print() {
    console.log("test");
}
export default RequestsGET;
