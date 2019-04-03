import React from "react";
import Paper from "@material-ui/core/Paper";

function ReactVirtualizedTable() {
    return (
        <Paper style={{ height: 200, width: '100%' }}>
            <WrappedVirtualizedTable
                rowCount={rows.length}
                rowGetter={({ index }) => rows[index]}
                onRowClick={event => console.log(event)}
                columns={[
                    {
                        width: 200,
                        flexGrow: 1.0,
                        label: 'Address',
                        dataKey: 'address',
                    },
                    {
                        width: 120,
                        label: 'Votes',
                        dataKey: 'votes',
                        numeric: true,
                    },
                    {
                        width: 120,
                        label: 'Live',
                        dataKey: 'live',
                        numeric: true,
                    },
                    {
                        width: 120,
                        label: 'Percentage',
                        dataKey: 'percentage',
                        numeric: true,
                    },

                ]}
            />
        </Paper>
    );
}