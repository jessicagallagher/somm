export default function PageHeader({ headerText }) {
  return (
    <div className='pt-6 pb-4'>
      <h1 className='accent-font is-size-2 has-text-centered is-size-1-desktop'>
        {headerText}
      </h1>
    </div>
  );
}
