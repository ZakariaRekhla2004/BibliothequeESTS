import * as f from "@/components/Form";
import AutoComplete from "@/components/ui/autoComplete";

import Input from "@/ui/Input";
import Form from "./form";
import Header from "@/components/mui/MuiHeader";

const Filière = ["GI", "TM", "GIM", "TIMQ"];

const page = () => {
  return (
    <Form>
      {/* numero d'insctiption */}
      <f.FormField name="num_ins" className="w-full">
        <div className="w-full">
          <Header
            variant="h6"
            sx={{
              fontSize: "1.4993rem",
              color: "#3a3541de",
              display: "flex",
              alignItems: "center",
            }}
          >
            Numero d{"'"}insctiption :
          </Header>
          <f.FormMessage match={"valueMissing"}>saisir le numero</f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un numero valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input className="h-10" name="num_ins" type="text" required />
        </f.FormControl>
      </f.FormField>
      {/* Numero Apogee */}
      <f.FormField name="num_apoge" className="w-full">
        <div className="w-full">
          <Header
            variant="h6"
            sx={{
              fontSize: "1.4993rem",
              color: "#3a3541de",
              display: "flex",
              alignItems: "center",
            }}
          >
            Numero apogee :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            saisir le numero apogee
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un Numero valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input className="h-10" name="num_apoge" type="number" required />
        </f.FormControl>
      </f.FormField>

      {/* Nom */}
      <f.FormField name="nom" className="w-full">
        <div className="w-full">
          <Header
            variant="h6"
            sx={{
              fontSize: "1.4993rem",
              color: "#3a3541de",
              display: "flex",
              alignItems: "center",
            }}
          >
            Nom :
          </Header>
          <f.FormMessage match={"valueMissing"}>saisir le nom</f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un nom valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input className="h-10" name="nom" type="text" required />
        </f.FormControl>
      </f.FormField>

      {/* Prenom */}
      <f.FormField name="prenom" className="w-full">
        <div className="w-full">
          <Header
            variant="h6"
            sx={{
              fontSize: "1.4993rem",
              color: "#3a3541de",
              display: "flex",
              alignItems: "center",
            }}
          >
            Prenom :
          </Header>
          <f.FormMessage match={"valueMissing"}>saisir le prenom</f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un prenom valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input className="h-10" name="prenom" type="text" required />
        </f.FormControl>
      </f.FormField>

      {/* filiere */}
      <f.FormField name="filiere" className="w-full">
        <div className="w-full">
          <Header
            variant="h6"
            sx={{
              fontSize: "1.4993rem",
              color: "#3a3541de",
              display: "flex",
              alignItems: "center",
            }}
          >
            Filiere
          </Header>
          <f.FormMessage match={"valueMissing"}>
            saisir la filiere
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir une filiere
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <AutoComplete options={Filière} name="filiere" />
        </f.FormControl>
      </f.FormField>
    </Form>
  );
};

export default page;
