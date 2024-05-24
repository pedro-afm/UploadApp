import pandas as pd

def read_File(file_path):
    try:
        # Opening and taking both sheets from Excel spreadsheet file
        xls = pd.ExcelFile(file_path)
        df1 = pd.read_excel(xls, sheet_name=xls.sheet_names[0])
        df2 = pd.read_excel(xls, sheet_name=xls.sheet_names[1])

        # Renaming the column of the second sheet
        df2 = df2.rename(columns={'T.QTD': 'QTD'}, inplace=True)
        combined_df = pd.concat([df1, df2])

        # Removing lines where stock and quantity are 0
        combined_df = combined_df[(combined_df['Stock'] > 0) & (combined_df['QTD'] > 0)]

        # Modifying the 'Descricao' column to contain only the last word of the string
        combined_df['Descricao'] = combined_df['Descricao'].apply(lambda x: x.split()[-1])

        print(combined_df)
        return combined_df
    except Exception as e:
        print(f'Error in read_File: {str(e)}')
        raise e 