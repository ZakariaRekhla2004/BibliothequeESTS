"use client"
import * as Toast from "@/components/ui/toast"
import DataTable from "@/components/DataTable"
import { CustomColumnMenu } from "@/ui/x-data-grid-customization/CustomColumnMenu"
import { CustomToolbar } from "@/ui/x-data-grid-customization/CustomToolBar"
import {
  GridActionsCellItem,
  GridColDef,
  GridRowParams,
} from "@mui/x-data-grid"
import { BiEdit } from "react-icons/bi"
import { MdDelete } from "react-icons/md"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export function Table({ data }: { data: any }) {
  const [isDeleted, setisDeleted] = useState(false)
  const [notDeleted, setnotDeleted] = useState(false)
  const router = useRouter()
  const Columns: GridColDef[] = [
    {
      field: "NOM",
      headerName: "Nom",
      flex: 1,
      type: "string",
      hideable: false,
    },
    {
      field: "PRENOM",
      headerName: "Prénom",
      flex: 1,
      type: "string",
      hideable: false,
    },
    {
      field: "GMAIL",
      headerName: "Email",
      flex: 1,
      type: "string",
      hideable: false,
    },
    {
      field: "ADDRESSE",
      headerName: "Adresse",
      flex: 1,
      type: "string",
      hideable: false,
    },
    {
      field: "TELEPHONE",
      headerName: "Téléphone",
      flex: 1,
      type: "number",
      hideable: false,
    },
    {
      field: "actions",
      width: 70,
      type: "actions",
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem
          key={`delete-${params.id}`}
          icon={<MdDelete className='text-xl' />}
          label='Supprimer'
          onClick={() => {
            fetch(`/api/fournisseur/${params.id}`, {
              method: "DELETE",
            })
              .then((res) => res.text())
              .then((data) => {
                if (data === "ok") {
                  router.refresh()
                  setisDeleted(data === "ok")
                  setTimeout(() => setisDeleted(false), 2000)
                } else {
                  setnotDeleted(true)
                  setTimeout(() => setnotDeleted(false), 2000)
                }
              })
          }}
        />,
        <GridActionsCellItem
          key={`edit-${params.id}`}
          icon={<BiEdit className='text-xl' />}
          label='Modifier'
          onClick={() => {
            router.push(`/updateDocs/fournisseur/${params.id}`);}}
        />,
      ],
    },
  ]

  useEffect(() => {
    router.refresh()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <DataTable
        columns={Columns}
        rows={data}
        ID='ID_FOR'
        customSlots={{
          columnMenu: CustomColumnMenu,
          toolbar: CustomToolbar,
        }}
        autoPageSize
      />
      <Toast.Provider>
        <Toast.Root open={isDeleted} Ttype={"success"}>
          <div>
            <Toast.Title>succès</Toast.Title>
            <Toast.Description>
              Fournisseur Supprimer avec succés
            </Toast.Description>
          </div>
          <Toast.Close asChild onClick={() => setisDeleted(false)}>
            <button className='bg-transparent border-2 border-blue-700/50 hover:border-blue-700  focus:border-blue-700 focus:outline-none rounded-md p-2 font-thin text-lg'>
              fermer
            </button>
          </Toast.Close>
        </Toast.Root>
        <Toast.Root open={notDeleted} Ttype={"error"}>
          <div>
            <Toast.Title>Error</Toast.Title>
            <Toast.Description>
              imposible de supprimer cet Fournisseur
            </Toast.Description>
          </div>
          <Toast.Close asChild onClick={() => setnotDeleted(false)}>
            <button className='border-2 border-white/50 hover:border-white rounded-md p-2 font-thin text-lg'>
              fermer
            </button>
          </Toast.Close>
        </Toast.Root>
        <Toast.ToastViewport className='[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none' />
      </Toast.Provider>
    </>
  )
}
