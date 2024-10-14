import React, { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableHeader, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";
import axios from "axios";

const ColumnSticky = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://elmobdia.cowdly.com/api/products/");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold sticky left-0 bg-background drop-shadow-md">Avatar</TableHead>
            <TableHead className="font-semibold">Title</TableHead>
            <TableHead className="font-semibold">Category</TableHead>
            <TableHead className="font-semibold">Farm</TableHead>
            <TableHead className="font-semibold">Unit</TableHead>
            <TableHead className="font-semibold">Price</TableHead>
            <TableHead className="font-semibold">Rating</TableHead>
            <TableHead className="font-semibold">Quantity</TableHead>
            <TableHead className="font-semibold">Views</TableHead>
            <TableHead className="text-center sticky right-0 bg-background drop-shadow-md">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id} className="hover:bg-muted">
              <TableCell className="font-medium text-card-foreground/80 sticky left-0 bg-background drop-shadow-md">
                <Avatar className="rounded-full">
                  <AvatarImage src={product.image} alt={product.title} />
                  <AvatarFallback>NA</AvatarFallback>
                </Avatar>
              </TableCell>

              <TableCell>{product.title}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.farm}</TableCell>
              <TableCell>{product.unit}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>
                <Badge variant="soft" color="info" className="capitalize">
                  {product.rating}
                </Badge>
              </TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.views}</TableCell>
              <TableCell className="flex gap-3 justify-end bg-background drop-shadow-md">
                <Button size="icon" variant="outline" color="secondary" className="h-7 w-7">
                  <Icon icon="heroicons:pencil" className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" color="secondary" className="h-7 w-7">
                  <Icon icon="heroicons:eye" className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" color="secondary" className="h-7 w-7">
                  <Icon icon="heroicons:trash" className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ColumnSticky;
