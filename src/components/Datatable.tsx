import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function DataTable({ data ,headers}) {
  return (
    <Table>
        <TableRow>
          {headers.map((header, index) => (
            <TableHead key={index} className={header.className || ""}>
              {header.label}
            </TableHead>
          ))}
        </TableRow>
      <TableBody>
        {data.map((customer, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{customer.name}</TableCell>
            <TableCell>{customer.email}</TableCell>
            <TableCell>{customer.mobile}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
