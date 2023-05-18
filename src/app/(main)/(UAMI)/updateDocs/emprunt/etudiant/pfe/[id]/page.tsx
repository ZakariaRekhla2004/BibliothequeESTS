import * as f from "@/components/Form";
import Header from "@/components/ui/Header";
import Input from "@/components/ui/Input";
import AutoComplete from "@/components/ui/autoComplete";
import { getEtudiantsShort } from "@/db/Get/Etudiant";
import { getNinv } from "@/db/Get/Livres";
import Form from "./form";
import { getEpfeID } from "@/db/Get/emprunt/etudiant/Epfe";
import { getCote } from "@/db/Get/Pfe";

const Page = async ({ params }: { params: { id: string } }) => {
  
  const id = parseInt(params.id);
  const [Apoge, Inv,emp] = await Promise.all([getEtudiantsShort(), getCote() , getEpfeID(id)]);
  const result = Apoge.map((obj) => obj.N_inscription);
  const result2 = Inv.map((obj) => obj.Cote);
  return (
    <Form id={id}>
      <div className="flex w-full">
        <div className="w-full md:w-1/2 border-r-2 border-gray-700 px-4">
          {/* nmr_Inv */}
          <f.FormField name="pfe" className="w-full">
            <div className="w-full">
              <Header size={"md"} className="p">
                Cote :
              </Header>
              <f.FormMessage match={"valueMissing"}>saisir Cote</f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir Cote valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <AutoComplete options={result2} name="pfe" defaultValue={emp?.Cote}/>
            </f.FormControl>
          </f.FormField>
          {/* nIns */}
          <f.FormField name="nIns" className="w-full">
            <div className="w-full">
              <Header size={"md"} className="p">
                Numéro d{"'"}inscription :
              </Header>
              <f.FormMessage match={"valueMissing"}>
                saisir un N d{"'"}inscription
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir un N d{"'"}inscription valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <AutoComplete options={result} name="nIns" defaultValue={emp?.N_inscription} />
            </f.FormControl>
          </f.FormField>
          {/* date_D */}
        </div>
        <div className="w-full md:w-1/2 px-4">
          <f.FormField name="date_D" className="w-full">
            <div className="w-full">
              <Header size={"md"} className="p">
                Date début :
              </Header>
              <f.FormMessage match={"valueMissing"}>
                saisir la date début
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir une date début valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                className="h-10"
                name="date_D"
                type="date"
                maxLength={255}
                required
              />
            </f.FormControl>
          </f.FormField>
          {/* date_f */}
          <f.FormField name="date_f" className="w-full">
            <div className="w-full">
              <Header size={"md"} className="p">
                Date fin :
              </Header>
              <f.FormMessage match={"valueMissing"}>
                saisir la date fin
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir une date fin valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                className="h-10"
                name="date_f"
                type="date"
                maxLength={255}
                required
              />
            </f.FormControl>
          </f.FormField>
        </div>
      </div>
    </Form>
  );
};

export default Page;
