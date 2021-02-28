export const buttonNotification = {
    successNotific: {
        variant: 'success',
        message: 'Login Succesful. Redirecting to GitHub Portal',
    },
    errorNotific: {
        variant: 'error',
        message: 'Invalid UserName. Enter a Valid UserName.',
    },
    loadingNotific: {
        variant: 'info',
        message: 'Fetching User Repositories. Please Be Patient..',
    },
};

export const GET_USER_REPO_LOADING = 'GET_USER_REPO_LOADING';
export const GET_USER_REPO_SUCCESS = 'GET_USER_REPO_SUCCESS';
export const GET_USER_REPO_FAILED = 'GET_USER_REPO_FAILED';
export const GET_USERNAME_FAILED = 'GET_USERNAME_FAILED';
export const GET_USERNAME_SUCCESS = 'GET_USERNAME_SUCCESS';
export const axiosHeader = {
    headers: { 'Access-Control-Request-Headers': '*' },
};

export const columnHeaders = [
    {
        headerName: 'Repository-Name',
        field: 'name',
        sortable: true,
        filter: true,
        resizable: true,
        cellRenderer: 'LinkComponent',
    },
    {
        headerName: 'Number of Stars',
        field: 'stargazers_count',
        sortable: true,
        filter: true,
        resizable: true,
    },
    {
        headerName: 'Number of Forks',
        field: 'forks',
        sortable: true,
        filter: true,
        resizable: true,
    },
];
