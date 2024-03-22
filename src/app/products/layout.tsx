
export default function Layout(props: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
    <div className=" w-full h-full relative">
        <div className="">
      {props.modal}
        </div>
        <div className=" w-full h-full">
      {props.children}
        </div>
    </div>
    </>
  );
}