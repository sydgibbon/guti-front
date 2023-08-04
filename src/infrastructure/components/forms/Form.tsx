interface formProps {
  children: React.ReactNode;
  handleSubmit: (event: React.SyntheticEvent) => void;
}

export default function Form(formProps: formProps) {
  const { children, handleSubmit } = formProps;

  return (
    <div className="mx-6 container bg-white rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-10 p-6 container__content">
          {children}
        </div>

        <div className="flex items-center justify-end h-24 border-t container__button">
          <button
            className="flex items-center justify-center px-4 py-2 text-white border-2 rounded-md w-[10rem] md:mr-4 border-orange-dark bg-primary-light hover:border-black"
            type="submit"
          >
            + Add
          </button>
        </div>
      </form>
    </div>
  );
}
