export default function ExcoPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Executive Committee
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Meet our dedicated team of leaders who work tirelessly to serve our
            community.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* Sample committee members - this will be dynamic when connected to Appwrite */}
          <div className="flex flex-col items-center">
            <img
              className="h-56 w-56 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Committee Member"
            />
            <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-gray-900">
              John Doe
            </h3>
            <p className="text-sm leading-6 text-gray-600">President</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="h-56 w-56 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Committee Member"
            />
            <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-gray-900">
              Jane Smith
            </h3>
            <p className="text-sm leading-6 text-gray-600">Vice President</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="h-56 w-56 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Committee Member"
            />
            <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-gray-900">
              Mike Johnson
            </h3>
            <p className="text-sm leading-6 text-gray-600">Secretary</p>
          </div>
        </div>
      </div>
    </div>
  );
}
