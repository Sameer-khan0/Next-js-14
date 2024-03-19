// import { useNavigation } from 'next/navigation';

const UserPage = ({params}) => {
  // const navigation = useNavigation();
  // const { id } = navigation.query;
  const { id } = params;


  return (
    <div>
      <h1>User ID: {id}</h1>
    </div>
  );
}

export default UserPage;
