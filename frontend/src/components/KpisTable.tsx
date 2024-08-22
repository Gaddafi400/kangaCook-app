import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface KpisTableProps {
  data: {
    id: number;
    name: string;
    value: number;
    description: string;
    target: number;
    controls: { name: string }[];
  }[];
}

const KpisTable: React.FC<KpisTableProps> = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: '90%' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ backgroundColor: '#f05324 !important' }}>
              Name
            </StyledTableCell>
            <StyledTableCell sx={{ backgroundColor: '#f05324 !important' }}>
              Value
            </StyledTableCell>
            <StyledTableCell sx={{ backgroundColor: '#f05324 !important' }}>
              Description
            </StyledTableCell>
            <StyledTableCell sx={{ backgroundColor: '#f05324 !important' }}>
              Target
            </StyledTableCell>
            <StyledTableCell sx={{ backgroundColor: '#f05324 !important' }}>
              Control
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell>{item.name}</StyledTableCell>
              <StyledTableCell>{item.value}</StyledTableCell>
              <StyledTableCell>{item.description}</StyledTableCell>
              <StyledTableCell>{item.target}</StyledTableCell>
              <StyledTableCell>
                {item.controls.length > 0
                  ? item.controls
                      .map((control) => control.name || '--')
                      .join(', ')
                  : '--'}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default KpisTable;
