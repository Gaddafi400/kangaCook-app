import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

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

interface ControlTableProps {
  data: {
    name: string;
    status: boolean;
  }[];
}

const getStatusColor = (status: boolean): string => {
  return status ? '#A3D9A5' : '#FFAB91';
};

const ControlTable: React.FC<ControlTableProps> = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: '90%' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ backgroundColor: '#f05324 !important' }}>
              Names
            </StyledTableCell>
            <StyledTableCell sx={{ backgroundColor: '#f05324 !important' }}>
              Status
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <StyledTableRow key={item.name}>
              <StyledTableCell component="th" scope="row">
                {item.name}
              </StyledTableCell>
              <StyledTableCell>
                <Typography
                  sx={{
                    bgcolor: getStatusColor(item.status),
                    display: 'inline',
                    padding: '4px 6px',
                    borderRadius: '10px',
                  }}
                >
                  {item.status ? 'active' : 'inactive'}
                </Typography>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ControlTable;
