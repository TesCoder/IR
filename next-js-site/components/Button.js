export default function Button({ className, children, ...others }) {
  return (
    <button className={'bg-ivy-red text-white py-2 px-4 mx-16 rounded-3xl transition-colors hover:bg-red-700 ' + className} {...others}>
      {...children}
    </button>

  )
}

