import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
    return (
        <div className='block lg:hidden'>
            <Accordion square>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography variant="h5">Tax Auditing</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    <>MFH Group audits and certifies the balance sheets, income statements, and tax declarations of individuals and legal entities<br />
                    (companies, associations, foundations, and their enterprises), as well as their requests related to tax laws, in terms of compliance with<br />
                    tax laws and generally accepted accounting standards.The prepared audit reports are submitted for the use of clients and official authorities.<br />
                    Tables that have been certified by Sworn-in Financial Advisors and given to official authorities in accordance with the law are considered as<br />
                    a document that has been examined to the extent of certification by the state's audit officials.</>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header">
                    <Typography variant="h5">Accounting and Financial Consultancy Services</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <>MFH Group provides the following services that clients may require during<br />
                        financial, administrative and legal events they face with a solution-oriented perspective:<br />
                        <br />
                        ✓ Financial Consulting<br />
                        ✓ Tax Planning<br />
                        ✓ Tax Legislation and Practices Consultancy<br />
                        ✓ Tax Disputes (Tax Litigation)<br />
                        ✓ Tax Compromises<br />
                        ✓ Cost Accounting Consultancy<br />
                        ✓ International Tax Consulting<br />
                        ✓ Bilateral Tax Treaty Implementation<br />
                        ✓ Foreign Capital Legislation, Practices and Foreign Capital Investments and Financial Advisory<br />
                        ✓ Tax Practices of Foreign Individuals/Companies<br />
                        ✓ Establishment Procedures (Establishment of Domestic and Foreign Capital Companies, Branches, Liaison Offices and Representative Offices)<br />
                        ✓ Mergers and Acquisitions, Valuation, Company Liquidation<br />
                        ✓ Articles of Association Amendments, General Assembly Meetings<br />
                        ✓ Capital Market Practices (Public Offering Studies)<br />
                        ✓ Up-to-date Information Transmissions on Changes in Financial Legislation<br /></>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header">
                    <Typography variant="h5">Incentives and R&D Consultancy</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <>MFH Group offers the following services with a solutions-oriented perspective<br />
                        which clients may require for the resolution of technical and complex issues such as<br />
                        Taxes, Incentives, Exemptions and disputes arising from legislation related to these issues:<br />
                        <br />
                        ✓ Consultancy on Investment Incentive Legislation (Investment Discount Exemption, VAT Exemption, Tax-Duty Fee Exemption, etc.)<br />
                        ✓ Consultancy on the Implementation of the Foreign Direct Investment Law<br />
                        ✓ Consultancy on R&D Incentive Legislation<br />
                        ✓ Consultancy on Technopark Legislation<br />
                        ✓ Consultancy on Free Zone Legislation<br />
                        ✓ Consultancy on Trademark Incentive Legislation<br />
                        ✓ Consultancy on Fair, Exhibition and Fair Incentive Legislation<br />
                        ✓ Analysis of Tax Liabilities in Transactions Defined as "Invisible Transactions"<br />
                        ✓ Obligations and Practices Related to the Resource Utilization Support Fund<br />
                        ✓ Other Tax Incentives<br /></>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5a-content"
                    id="panel5a-header">
                    <Typography variant="h5">Social Security Advisory</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <>MFH Group provides solutions to companies in the fields of labor and social security such as<br />
                        Social Security Institution procedures, termination processes, reinstatements and calculations,<br />
                        severances, notice and vacation pay, transfers and mergers, employment contracts and compliance with all legal obligations.</>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6a-content"
                    id="panel6a-header">
                    <Typography variant="h5">Customs and Foreign Trade Legislation Consultancy</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <>MFH Group offers the following services that its customers may need within the scope of<br />
                        Export, Import and Foreign Exchange Legislation and applications with a solution-oriented perspective:<br />
                        <br />
                        ✓ Customs legislation<br />
                        ✓ Foreign trade legislation<br />
                        ✓ Tax legislation related to foreign trade (GMSI, SMK, withholding tax, VAT, stamp tax)<br />
                        ✓ Consultancy on the Legislation on the Protection of the Value of Turkish Currency<br />
                        ✓ VAT-Tax legislation and refund transactions<br />
                        ✓ Export transactions<br />
                        ✓ Inward processing regime<br />
                        ✓ Customs reconciliation (counseling in the reconciliation process)<br />
                        ✓ Customs litigation<br />
                        ✓ Audit process (consultancy in the process of inspector review)<br /></>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7a-content"
                    id="panel7a-header">
                    <Typography variant="h5">Management, Corporate Finance and Technology Consulting</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <>MFH Group's technical knowledge and experience, flexibility and close working relationship<br />
                        with our clients enables us to be a team capable of developing a different approach for each different case.<br />
                        We enrich and differentiate our sector and subject matter expertise, which is the result of our technical knowledge and experience,<br />
                        by working with companies of varying scales and structures. Our goal in every project<br />
                        is to implement feasible and result-oriented approaches that will add value to our customers with our flexible working structure.<br />
                        Our consultancy team is equipped with the most up-to-date theoretical knowledge, as well as practical experience<br />
                        and the latest technological developments in order to realize your projects.<br />
                        MFH Group is organized to provide management consultancy support by acting as a whole in line with customer needs.</>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel8a-content"
                    id="panel8a-header">
                    <Typography variant="h5">Company Law Legislation Consultancy</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <>Pursuant to the Turkish Commercial Code No. 6102 and the secondary legislation issued in relation to this Code,<br />
                        necessary services are provided for the change of type of commercial enterprises and companies,<br />
                        mergers or divisions of companies in accordance with the tax legislation.</>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}