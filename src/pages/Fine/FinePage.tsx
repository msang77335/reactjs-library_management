import React from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";
import Tr from "../../components/Table/Tr/Tr";
import Th from "../../components/Table/Th/Th";
import * as s from "./StyleFinePage";
import Td from "../../components/Table/Td/Td";
import PageTitle from "../../components/Page/PageTitle/PageTitle";
import TableLabel from "../../components/Table/TableLabel/TableLabel";
import TableTitle from "../../components/Table/TableTitle/TableTitle";
import TableContent from "../../components/Table/TableContent/TableContent";
import Thead from "../../components/Table/Thead/Thead";
import Tbody from "../../components/Table/Tbody/Tbody";
import TableActions from "../../components/Table/TableActions/TableActions";
import TableDes from "../../components/Table/TableDes/TableDes";
import TablePagination from "../../components/Table/TablePagination/TablePagination";
import useFetch from "../../hooks/useFetch";
import { FineReceipt } from "../../interface/index";
import fineReceiptApi from "../../api/fineReceiptApi";
import Loading from "../../components/Loading/Loading";
import PageContent from "../../components/Page/PageContent/PageConent";

const FinePage: React.FC = () => {
   const [data, isLoading, error] = useFetch<FineReceipt[]>(() =>
      fineReceiptApi.getAll()
   );
   return (
      <s.FinePage>
         {isLoading ? (
            <Loading />
         ) : (
            <PageContent>
               <PageTitle title="Fine Receipt Manage" />
               <Table>
                  <TableLabel>
                     <TableTitle title="Fine List" />
                     <TableDes des="Here is a brief infomation of the Fine Receipt. Click on the Eye icon to see details." />
                  </TableLabel>
                  <TableActions />
                  <TableContent>
                     <Thead>
                        <Tr>
                           <Th width="3.5">No.</Th>
                           <Th>Reader Name</Th>
                           <Th isHidden>Debt</Th>
                           <Th>Payment</Th>
                           <Th isHidden>Remaining</Th>
                           <Th isCenter>Actions</Th>
                        </Tr>
                     </Thead>
                     <Tbody>
                        {data!.map((value, i) => (
                           <Tr key={value.id}>
                              <Td isCenter>{i + 1}</Td>
                              <Td>{value.reader.value}</Td>
                              <Td isHidden>{`${value.debt} VND`}</Td>
                              <Td>{`${value.payment} VND`}</Td>
                              <Td isHidden>{`${value.remaining} VND`}</Td>
                              <Td isCenter>
                                 <Link to={`/receipt-manage/fine/${value.id}`}>
                                    <s.EyeIcon />
                                 </Link>
                              </Td>
                           </Tr>
                        ))}
                     </Tbody>
                  </TableContent>
                  <TablePagination />
               </Table>
            </PageContent>
         )}
      </s.FinePage>
   );
};

export default FinePage;
