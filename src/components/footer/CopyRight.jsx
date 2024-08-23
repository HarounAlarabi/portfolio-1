function CopyRight() {
  const year = new Date().getFullYear();
  return (
    <>
      <hr className="my-2 border-gray-200 sm:mx-auto lg:my-4 dark:border-gray-700" />
      <span className="mb-4 block text-sm text-gray-100 sm:text-center dark:text-gray-400">
        ©{year}
        <a href="/home" className="hover:underline">
          {''}Haroun™
        </a>
        . All Rights Reserved.
      </span>
    </>
  );
}

export default CopyRight;
