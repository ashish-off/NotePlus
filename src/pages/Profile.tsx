import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { MdArrowBackIos } from "react-icons/md";

const Profile = () => {
  const user = useSelector((state: RootState) => state.authStore.user);

  return (
    <section className="w-full sm:w-md mx-auto py-4 px-4 sm:px-0">
      <main className="bg-[#3F3A47] my-8 shadow-2xl rounded-4xl p-6 sm:p-8 text-amber-50/90">
        <header className="flex items-center justify-between mb-6">
          <Link
            to="/"
            className="bg-[#4f4bbd] text-amber-50/80 h-11 w-11 flex items-center justify-center rounded-xl hover:scale-104 active:shadow-none active:scale-95 transition-all duration-100"
            title="Back to notes"
          >
            <MdArrowBackIos size={22} />
          </Link>
          <h1 className="text-2xl font-bold">Profile</h1>
        </header>

        <div className="space-y-4">
          <div className="bg-[#2f2a37] rounded-xl p-4 border border-white/10">
            <p className="text-xs uppercase tracking-wider text-amber-50/50">
              Name
            </p>
            <p className="text-lg font-semibold mt-1">{user?.name ?? "-"}</p>
          </div>

          <div className="bg-[#2f2a37] rounded-xl p-4 border border-white/10">
            <p className="text-xs uppercase tracking-wider text-amber-50/50">
              Email
            </p>
            <p className="text-lg font-semibold mt-1 break-all">
              {user?.email ?? "-"}
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Profile;
