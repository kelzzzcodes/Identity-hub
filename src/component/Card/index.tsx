type CardProps = {
  name: string
  email: string
  phone: string
  imageUrl: string
  gender: string
  country: string
  getNewUser: () => void
}

export const Card = ({
  name,
  email,
  phone,
  imageUrl,
  gender,
  country,
  getNewUser,
}: CardProps) => {
  return (
    <div className="max-w-2xl w-full mx-auto p-6 bg-white shadow-lg rounded-2xl flex flex-col gap-4">
      <div className=" flex items-center space-x-4">
        <img
          className="w-56 rounded-full object-cover border-2 border-slate-300"
          src={imageUrl}
          alt={name}
        />
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-slate-800">{name}</h2>
          <div className="mt-2 text-sm text-slate-600 flex flex-col gap-2">
            <p>
              Gender: <span className="">{gender}</span>
            </p>
            <p>
              Country: <span className="">{country}</span>
            </p>
            <p>
              Email:{' '}
              <a
                className="text-blue-600 hover:underline"
                href={`mailto:${email}`}
              >
                {email}
              </a>
            </p>
            <p>
              Phone:{' '}
              <a
                className="text-blue-600 hover:underline"
                href={`tel:${phone}`}
              >
                {phone}
              </a>
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={getNewUser}
        className="p-4 bg-blue-600 rounded-lg text-white text-xl font-bold"
      >
        Get New User
      </button>
    </div>
  )
}
