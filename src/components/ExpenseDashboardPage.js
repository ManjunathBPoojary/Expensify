import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpnenseSummary from '../components/ExpensesSummary';

const ExpenseDashboardPage = () => {
    return (
        <div>
            <ExpnenseSummary />
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    );
}

export default ExpenseDashboardPage;