import { FamilyComponent } from "../../../components/community/family/FamilyComponent";

export const FamilyPage = () => {
  return (
    <section className="w-[65%] mx-auto h-screen">
      <main>
        <div className="mt-5 font-semibold py-5 text-3xl text-[#522b5b]">
          <h1>Gestor de familias</h1>
        </div>
        <FamilyComponent />
      </main>
    </section>
  );
};
