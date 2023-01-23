import './styles.css';

type Props = {
  text: string;
};

export default function FilterButton({ text }: Props) {
  return (
    <>
      <div>
        <button className='button-dsfilter'>{text}</button>
      </div>
    </>
  );
}
