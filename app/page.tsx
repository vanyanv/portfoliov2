import Login from './components/Login';
import MenuBar from './components/MenuBar';

export default function Home() {
  return (
    <div>
      <MenuBar />
      <Login userName={'Vardan Vanyan'} />
    </div>
  );
}
